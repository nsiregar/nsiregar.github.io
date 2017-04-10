var gulp = require('gulp'),
    shell = require('gulp-shell'),
    minifyHTML = require('gulp-minify-html'),
    minifyCSS = require('gulp-minify-css'),
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
    runSequence = require('run-sequence');

gulp.task('jekyll', function() {
    return gulp.src('index.html', { read: false })
        .pipe(shell([
            'bundle exec jekyll build'
        ]));
});
    
gulp.task('html-proofer', function() {
    return gulp.src('_site/**/*.html')
        .pipe(shell([
            'bundle exec htmlproofer --disable-external'
        ]));
});

gulp.task('fetch-analytics', function() {
    return download('https://www.google-analytics.com/analytics.js')
        .pipe(gulp.dest('_site/assets/themes/twitter/js/'));
});

gulp.task('fetch-pageads', function() {
    return download('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js')
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
    return gulp.src('_src/assets/themes/twitter/css/bootstrap.reduced.css')
        .pipe(autoprefixer())
        .pipe(uncss({
            html: ['_site/**/*.html'],
            ignore: []
        }))
        .pipe(minifyCSS({keepBreaks: false}))
        .pipe(gulp.dest('_src/assets/themes/twitter/css/'));
});

gulp.task('optimize-js', function() {
    return gulp.src('_site/assets/themes/twitter/js/*.js')
        .pipe(concat('jquery.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('_site/assets/themes/twitter/js/'));
});

gulp.task('optimize-html', function() {
    return gulp.src('_site/**/*.html')
        .pipe(minifyHTML({
            quotes: true
        }))
        .pipe(replace(/<link href=\"\/assets\/themes\/twitter\/css\/bootstrap.reduced.css\"[^>]*>/, function(s) {
			var style = fs.readFileSync('_site/assets/themes/twitter/css/bootstrap.reduced.css', 'utf8');
			return '<style>\n' + style + '\n</style>';
        }))
        .pipe(gulp.dest('_site/'));

});

gulp.task('deploy', function(callback) {
    runSequence(
        'fetch-analytics',
        'fetch-pageads',
        'jekyll',
        'html-proofer',
        'optimize-images',
        'optimize-css',
        'optimize-js',
        callback
    );
});