var gulp = require('gulp'),
    shell = require('gulp-shell'),
    minifyHTML = require('gulp-minify-html'),
    minifyInline = require('gulp-minify-inline'),
    cleanCSS = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    uncss = require('gulp-uncss'),
    download = require('gulp-download'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    jpegtran = require('imagemin-jpegtran'),
    gifsicle = require('imagemin-gifsicle'),
    replace = require('gulp-replace'),
    fs = require('fs'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minify = require('gulp-minify'),
    runSequence = require('run-sequence'),
    rename = require('gulp-rename'),
    pixrem = require('gulp-pixrem'),
    algoliasearch = require('algoliasearch'),
    algoliaAPPID = process.env.ALGOLIA_APPLICATION_ID,
    algoliaAPIKEY = process.env.ALGOLIA_API_KEY,
    algoliaINDEX = process.env.ALGOLIA_INDEX;

gulp.task('jekyll', function() {
    return gulp.src('index.html', { read: false })
        .pipe(shell([
            'JEKYLL_ENV=production bundle exec jekyll build'
        ]));
});
    
gulp.task('html-proofer', function() {
    return gulp.src('index.html', { read: false })
        .pipe(shell([
            'bundle exec htmlproofer ./_site --disable-external'
        ]));
});

gulp.task('fetch-analytics', function() {
    return download('https://www.google-analytics.com/analytics.js')
        .pipe(gulp.dest('_site/assets/themes/twitter/js/'));
});

gulp.task('optimize-image', function() {
    return gulp.src([
        '_site/img/*.jpg',
        '_site/img/*.jpeg',
        '_site/img/*.gif',
        '_site/img/*.png'
    ])
        .pipe(imagemin({
            progressive: false,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngquant(), jpegtran(), gifsicle()]
        }))
        .pipe(gulp.dest('_site/img/'));
});

gulp.task('optimize-css', function() {
    return gulp.src('_site/assets/themes/twitter/css/*.css')
        .pipe(concat('bundle.css'))
        .pipe(rename('bundle.min.css'))
        .pipe(autoprefixer())
        .pipe(uncss({
            html: ['_site/**/*.html'],
            ignore: []
        }))
        .pipe(pixrem())
        .pipe(cleanCSS())
        .pipe(gulp.dest('_site/assets/themes/twitter/css/'));
});

gulp.task('optimize-js', function() {
    return gulp.src('_site/assets/themes/twitter/js/main.js')
        .pipe(concat('bundle.js'))
        .pipe(rename('bundle.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('_site/assets/themes/twitter/js/'));
});

gulp.task('optimize-html', function() {
    return gulp.src('_site/**/*.html')
        .pipe(minifyHTML({
            quotes: true
        }))
        .pipe(minifyInline())
        .pipe(replace(/<link href=\"\/assets\/themes\/twitter\/css\/main.css\"[^>]*>/, function(s) {
			var style = fs.readFileSync('_site/assets/themes/twitter/css/bundle.min.css', 'utf8');
			return '<style>\n' + style + '\n</style>';
        }))
        .pipe(gulp.dest('_site/'));

});

gulp.task('algolia-index', function() {
    let client = algoliasearch(algoliaAPPID, algoliaAPIKEY, { timeout: 4000 });
    let index = client.initIndex(algoliaINDEX);

    index.addObjects('./_site/algolia.json', function(err, content) {
        console.log(content);
    });
    return gulp.src('_site/algolia.json', {read: false})
        .pipe(gulp.dest('_site/'));
});

gulp.task('deploy', function(callback) {
    runSequence(
        'fetch-analytics',
        'jekyll',
        'optimize-image',
        'optimize-css',
        'optimize-js',
        'optimize-html',
        'algolia-index',
        'html-proofer',
        callback
    );
});