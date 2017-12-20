---
layout: post
title: "Mengubah Direktori Kerja dalam R"
subtitle: ""
description: "Mengubah Direktori Kerja dalam R"
category: R
tags: [r, tips, rstudio]
---
{% include JB/setup %}

Sebagaimana yang kita ketahui, ketika menjalankan RStudio pertama kali maka direktori kerja kita akan menggunakan `/home/username`. Hal ini dapat kita rubah dengan cara mengganti nilai dari `default working directory` melalui `Tools -> Global Options -> Default Working Directory`.

<!--more-->
<img src="{{ site.baseurl }}/img/default-dir.png" class="img-responsive" alt="default dir">

Dengan melakukan hal tersebut maka ketika menjalankan RStudio direktori kerja kita akan menggunakan yang telah kita cantumkan.

Untuk saya sendiri lebih menyukai `home` sebagai acuan direktori kerja.

Lalu bagaimana jika kita ingin mengubah direktori kerja sesuai dengan _script_ yang kita jalankan? RStudio menyediakan API yang dapat diakses dengan menggunakan paket `rstudioapi`. Dengan begitu kita dapat membuat fungsi untuk mengatur direktori kerja kita. Fungsi yang akan kita gunakan adalah `getActiveDocumentContext()`, fungsi ini mengembalikan `list` berisi nilai `path` yang kita perlukan untuk mendapat `path` direktori. Selain menggunakan API RStudio kita juga menggunakan fungsi `setwd()` untuk mengatur direktori kerja sesuai `path` dari berkas yang kita jalankan.

> Pasang `rstudioapi` dengan `install.packages("rstudioapi")` jika kamu belum memilikinya

    set_wd <- function() {
        library(rstudioapi) # 
        current_path <- getActiveDocumentContext()$path 
        setwd(dirname(current_path ))
        print( getwd() )
    }

Fungsi tersebut lebih memudahkan dibandingkan dengan hanya menggunakan fungsi `setwd("/direktori/kerja")`.
