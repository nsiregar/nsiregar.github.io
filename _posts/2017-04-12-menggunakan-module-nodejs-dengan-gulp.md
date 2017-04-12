---
layout: post
title: "Menggunakan Module NodeJS dengan Gulp"
subtitle: "Indexing Algolia Object with Gulp"
description: "Menggunakan module NodeJS dengan Gulp untuk melakukan indexing object pada algolia"
category: Web
tags: [gulp, index, nodejs, algolia]
---
{% include JB/setup %}

Saat dalam proses menambahkan fitur _full text searching_ pada [linhub](https://linhub.io/), saya menggunakan Algolia untuk melakukan _indexing_. Proses _indexing_ sendiri saya lebih memilih melakukan secara _batch update_, ketika membuat task untuk Gulp saya mengalami beberapa kali kegagalan. Hal ini dikarenakan saya menggunakan fungsi dari `algoliasearch` seperti saya menggunakan fitur dari Gulp. Gulp pada dasarnya adalah sebuah _task runner_ yang melakukan tugasnya dengan _stream_, hal ini yang memungkinkan kita dapat melakukan _piping_ dengan fungsi `.pipe()` pada _stream_ yang dihasilkan.

Untuk menggunakan `module` NodeJS dengan Gulp sebenarnya cukup mudah, seperti menulis _Gulp Task_ pada umumnya. Namun tidak menghasilkan atau memproses _stream_, berikut adalah contoh _task_ yang saya gunakan untuk melakukan _indexing_ ke Algolia.

    var algoliasearch = require('algoliasearch'),
        algoliaAPPID = process.env.ALGOLIA_APPLICATION_ID,
        algoliaAPIKEY = process.env.ALGOLIA_API_KEY,
        algoliaINDEX = process.env.ALGOLIA_INDEX,
        jsonlint = require('gulp-jsonlint');

    gulp.task('json-proofer', function() {
        return gulp.src('_site/algolia.json')
            .pipe(jsonlint())
            .pipe(jsonlint.reporter())
            .pipe(gulp.dest('_site'));
    });

    gulp.task('algolia-index', function() {
        var algoliaJSON = require('./_site/algolia.json');
        return algoliasearch(algoliaAPPID, algoliaAPIKEY)
            .initIndex(algoliaINDEX)
            .saveObjects(algoliaJSON, function(err, content) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(content);
                }
            });
    });

Pada contoh diatas saya juga menambahkan _task_ `json-proofer`, hal ini dimaksudkan untuk memastikan bahwa JSON yang digunakan benar-benar _error free_. Pada _task_ `algolia-index` seperti yang sudah disebutkan, saya hanya memanggil fungsi pada umumnya tanpa harus melakukan _stream_. Berkas JSON yang saya gunakan adalah berkas yang dihasilkan dari Liquid, berikut adalah contoh JSON dari Liquid yang saya gunakan

 {% highlight html %}{% raw %}
    ---
    layout: null
    ---

    [
    {% for post in site.posts %}
        {
        "date":"{{ post.date | date: '%s' }}",	
        "title":"{{ post.title }}",
        "author":"{{ site.author.name }}",
        "category": "{{ post.category }}",
        "tags":"{{ post.tags | join: ',' }}",
        "url": "{{ post.url | prepend: site.url}}",
        "description":"{{ post.content | strip_html | strip_newlines | xml_escape | truncatewords: 50 }}",
        "objectID":"{{ post.url }}"
        }
        {% unless forloop.last %},{% endunless %}
    {% endfor %}
    ]

{% endraw %}{% endhighlight %}

Nah PR yang tersisa sekarang hanya mengubah tampilan dari laman utama [linhub](https://linhub.io/) ...
