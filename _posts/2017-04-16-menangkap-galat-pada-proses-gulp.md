---
layout: post
title: "Menangkap Galat pada Proses Gulp"
subtitle: "Gulp Error Handling"
description: "Menangkap galat pada proses gulp dengan error handling"
category: web
tags: [gulp, nodejs]
---
{% include JB/setup %}

Ketika sedang bermain dengan Gulp, terkadang plugin yang digunakan tidak memberikan pesan galat, proses berjalan namun hasil tidak sesuai dengan apa yang kita harapkan. Umumnya _plugin_ gulp melakukan prosesnya dengan _piping_ pada _stream_ yang diberikan, untuk itu kita dapat menggunakan _method_ `.on()`. Dengan _method_ `.on()` ini kita dapat menangkap galat yang terjadi pada _stream_ yang sedang diproses.

<!--more-->
{% highlight javascript %}
var gulp = require('gulp')

function onError(error) {
    // proses galat disini
}

gulp.task('test', function() {
    return gulp.src('path_ke_sumber')
        .pipe(proses())
        .on('error', onError)
})
{% endhighlight %}

Namun seiring dengan berkembangnya waktu, akhirnya ada juga plugin untuk melakukan penangkapan galat ini. Dengan menggunakan `gulp-plumber` kita dapat menangkap galat sebagai berikut.

{% highlight javascript %}
var gulp = require('gulp')
var plumber = require('gulp-plumber')
var util = require('gulp-util')

gulp.task('test', function() {
    var onError = function(err) {
        //proses galat disini
    }

    return gulp.src('path_ke_sumber')
        .pipe(plumber({
            errorHandler: onError,
        }))
        .pipe(proses())
        .pipe(gulp.dest('path_tujuan'))
})
{% endhighlight %}

Nah dengan dua cara tersebut saya masih belum tahu mana yang lebih efektif, namun saat ini saya masih suka menggunakan `gulp-plumber`.