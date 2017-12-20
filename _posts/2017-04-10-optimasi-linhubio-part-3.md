---
layout: post
title: "Optimasi Linhub.IO"
subtitle: "Part 3"
description: "Think With Google Optimization"
category: 
tags: [css, google, optimization]
---
{% include JB/setup %}  

Tiba-tiba pagi ini saya dapat ide, karena sedang asyik bermain menggunakan Travis-CI saya mendapat ide tentang melakukan optimasi dengan seluruh _asset_ pada [linhub](https://linhub.io/). Jika pada posting [optimasi](https://linhub.io/2017/02/17/optimasi-linhubio-part-2/) sebelumnya, saya menggunakan layanan _online_ untuk melakukan proses _minification_ kali ini saya ingin semua dilakukan ketika proses _deploy_.

<!--more-->
Untuk mencapai tujuan ini, saya menggunakan [Gulp](http://gulpjs.com/) untuk proses optimasi gambar, optimasi css, optimasi js, dan juga optimasi html itu sendiri. Proses yang saya jalankan adalah memberi perintah untuk _build_ dengan `bundle exec jekyll build` kemudian dilanjutkan semua proses optimasi hingga pengecekan html dengan `html-proofer`.

### Optimasi Gambar
Jika kamu membaca artikel dari [Pak Haji](https://rizaumami.github.io/2017/04/09/optimasi-gambar-untuk-blog/), tentang bagaimana beliau melakukan optimasi gambar, sungguh sangat merepotkan jika ternyata artikel kamu sudah banyak dan hampir semuanya menggunakan gambar. Untuk itu pada berkas `gulpfile.js` saya membuat _task_ untuk optimasi gambar sebagaimana berikut

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

Dengan _task_ tersebut maka seluruh gambar dengan format `.png`, `.jpeg`, `.jpg`, dan `.gif` akan dioptimasi menggunakan paket `gulp-imagemin`, `imagemin-pngquant`, `imagemin-jpegtran`, dan `imagemin-gifsicle`.

### Optimasi CSS
Optimasi css ini berfungsi agar berkas css tidak digunakan seluruhnya namun hanya sebagian, mungkin anda bingung akan tetapi dengan menggunakan _inline style_ maka halaman akan terbuka dengan lebih cepat. Berikut adalah _task_ yang saya buat untuk optimasi css

    gulp.task('optimize-css', function() {
        return gulp.src('_site/assets/themes/twitter/css/*.css')
            .pipe(concat('bundle.css'))
            .pipe(rename('bundle.min.css'))
            .pipe(autoprefixer())
            .pipe(uncss({
                html: ['_site/**/*.html'],
                ignore: []
            }))
            .pipe(cleanCSS())
            .pipe(gulp.dest('_site/assets/themes/twitter/css/'));
    });

_Task_ tersebut menggunakan paket `gulp-concat`, `gulp-rename`, `gulp-autoprefixer`, `gulp-uncss`, dan `gulp-clean-css`.

### Optimasi HTML
Optimasi ini masih berhubungan dengan optimasi css sebelumnya karena menginginkan agar menggunakan _inline style_ maka _task_ pun disesuaikan sebagai berikut

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

Optimasi ini menggunakan tiga paket utama yang berperan penting untuk membuat _inline style_ yaitu `gulp-minify-html`, `gulp-minify-inline`, dan `gulp-replace`.

### Optimasi Javascript
Situs ini menggunakan beberapa _script_ javascript untuk kebutuhan tertentu, untuk itu diperlukan optimasi pada _script_ yang dijalankan. Berikut adalah _task_ untuk melakukan optimasi pada _script_ javascript [linhub](https://linhub.io/)

    gulp.task('optimize-js', function() {
        return gulp.src(['_site/assets/themes/twitter/js/main.js', '_site/assets/themes/twitter/js/lainnya.js'])
            .pipe(concat('bundle.js'))
            .pipe(rename('bundle.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest('_site/assets/themes/twitter/js/'));
    });

Paket utama yang digunakan untuk proses ini hanyalah `gulp-uglify`.

Semua prose optimasi tersebut dijalankan ketika melakukan build di Travis-CI, dan setelah proses optimasi tersebut nilai untuk [linhub](https://linhub.io/) pada Think With Google sungguh meningkat tajam. Berikut adalah skornya 

<img src="{{ site.baseurl }}/img/linhub-optimasi-p3.png" class="img-responsive" alt="Uwaaaaaa ">