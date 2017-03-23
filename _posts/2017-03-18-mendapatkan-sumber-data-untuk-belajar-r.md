---
layout: post
title: "Mendapatkan Sumber Data untuk Belajar R"
subtitle: ""
description: "Mendapat data untuk belajar R"
category: R
tags: [r, data, source, dataset]
---
{% include JB/setup %}

> Update 20 Maret 2017 - tambahan sumber dataset

Ketika pertama kali mempelajari R biasanya kita akan bingung tentang data apa yang akan kita gunakan. Jika bekerja sebagai data analyst atau data scientist mungkin tidak terlalu sulit mendapatkannya lalu bagaimana nasib yang belom bekerja?. Tidak perlu gundah gulana memikirkan hal tersebut, di dalam R tersedia berbagai macam dataset yang bisa kita gunakan untuk belajar.

Untuk menampilkan seluruh dataset bawaan R dapat menggunakan fungsi `data()`

<img src="{{ site.baseurl }}/img/r-dataset.png" class="img-responsive" alt="r dataset">

#### Menggunakan Data dari Dataset R
Untuk menggunakan data dari dataset R gunakan perintah

    > data("mtcars")
    > head(mtcars, 6)
                    mpg cyl disp  hp drat    wt  qsec vs am gear carb
    Mazda RX4         21.0   6  160 110 3.90 2.620 16.46  0  1    4    4
    Mazda RX4 Wag     21.0   6  160 110 3.90 2.875 17.02  0  1    4    4
    Datsun 710        22.8   4  108  93 3.85 2.320 18.61  1  1    4    1
    Hornet 4 Drive    21.4   6  258 110 3.08 3.215 19.44  1  0    3    1
    Hornet Sportabout 18.7   8  360 175 3.15 3.440 17.02  0  0    3    2
    Valiant           18.1   6  225 105 2.76 3.460 20.22  1  0    3    1

Dengan menggunakan `?mtcars` maka akan menampilkan bantuan terkait dataset tersebut

<img src="{{ site.baseurl }}/img/r-mtcars-help.png" class="img-responsive" alt="r mtcars">

### Menggunakan Data dari Internet
Ada beberapa situs yang menyediakan dataset untuk belajar R, salah satunya adalah [UCI Machine Learning Repository](http://archive.ics.uci.edu/ml/index.html). Di situs tersebut disediakan cukup banyak salah satu contoh adalah dataset [Gas sensors for home activity monitoring Data Set](http://archive.ics.uci.edu/ml/datasets/Gas+sensors+for+home+activity+monitoring). Silahkan gunakan pencarian untuk dataset yang ingin dipelajari.

Silahkan coba menggunakan dataset bawaan dari R untuk memulai belajar R.