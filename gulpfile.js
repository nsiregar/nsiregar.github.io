var gulp = require('gulp')
var shell = require('gulp-shell')
var minifyHTML = require('gulp-minify-html')
var minifyInline = require('gulp-minify-inline')
var cleanCSS = require('gulp-clean-css')
var autoprefixer = require('gulp-autoprefixer')
var uncss = require('gulp-uncss')
var download = require('gulp-download')
var imagemin = require('gulp-imagemin')
var pngquant = require('imagemin-pngquant')
var jpegtran = require('imagemin-jpegtran')
var gifsicle = require('imagemin-gifsicle')
var replace = require('gulp-replace')
var fs = require('fs')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var runSequence = require('run-sequence')
var rename = require('gulp-rename')
var pixrem = require('gulp-pixrem')
var algoliasearch = require('algoliasearch')
var algoliaAPPID = process.env.ALGOLIA_APPLICATION_ID
var algoliaAPIKEY = process.env.ALGOLIA_API_KEY
var algoliaINDEX = process.env.ALGOLIA_INDEX
var jsonlint = require('gulp-jsonlint')

gulp.task('jekyll', function () {
  return gulp.src('index.html', { read: false })
        .pipe(shell([
          'JEKYLL_ENV=production bundle exec jekyll build'
        ]))
})

gulp.task('html-proofer', function () {
  return gulp.src('index.html', { read: false })
        .pipe(shell([
          'bundle exec htmlproofer ./_site --disable-external'
        ]))
})

gulp.task('fetch-analytics', function () {
  return download('https://www.google-analytics.com/analytics.js')
        .pipe(gulp.dest('_site/assets/themes/twitter/js/'))
})

gulp.task('optimize-image', function () {
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
        .pipe(gulp.dest('_site/img/'))
})

gulp.task('optimize-css', function () {
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
        .pipe(gulp.dest('_site/assets/themes/twitter/css/'))
})

gulp.task('optimize-js', function () {
  return gulp.src('_site/assets/themes/twitter/js/main.js')
        .pipe(concat('bundle.js'))
        .pipe(rename('bundle.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('_site/assets/themes/twitter/js/'))
})

gulp.task('optimize-html', function () {
  return gulp.src('_site/**/*.html')
        .pipe(minifyHTML({
          quotes: true
        }))
        .pipe(minifyInline())
        .pipe(replace(/<link href="\/assets\/themes\/twitter\/css\/main.css"[^>]*>/, function (s) {
          var style = fs.readFileSync('_site/assets/themes/twitter/css/bundle.min.css', 'utf8')
          return '<style>\n' + style + '\n</style>'
        }))
        .pipe(gulp.dest('_site/'))
})

gulp.task('json-proofer', function () {
  return gulp.src('_site/algolia.json')
        .pipe(jsonlint())
        .pipe(jsonlint.reporter())
        .pipe(gulp.dest('_site'))
})

gulp.task('algolia-index', function () {
  var algoliaJSON = require('./_site/algolia.json')
  return algoliasearch(algoliaAPPID, algoliaAPIKEY)
        .initIndex(algoliaINDEX)
        .saveObjects(algoliaJSON, function (err, content) {
          if (err) {
            console.log(err)
          } else {
            console.log(content)
          }
        })
})

gulp.task('deploy', function (callback) {
  runSequence(
        'fetch-analytics',
        'jekyll',
        'optimize-image',
        'optimize-css',
        'optimize-js',
        'optimize-html',
        'html-proofer',
        'json-proofer',
        'algolia-index',
        callback
    )
})
