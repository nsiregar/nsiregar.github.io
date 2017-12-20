---
layout: post
title: "Statistik Deskriptif dengan R"
subtitle: ""
description: "Cara Melakukan Uji Statistik Deskriptif dengan Menggunakan R"
category: R 
tags: [r, statistic, decriptive]
---
{% include JB/setup %}

Dalam sebuah penelitian deskripsi data diperlukan untuk memberikan gambaran data, sehingga mempermudah pembaca untuk mengetahui paparan data secara jelas. Di dalam R ada beberapa cara untuk mendapatkan statistik deskriptif ini, salah satunya adalah dengan menggunakan fungsi `sapply()`.

<!--more-->
    > sapply(list_or_vector, mean, na.rm = TRUE)

Perintah diatas untuk mendapatkan `mean` dari `list` atau `vector` data dengan mengesampingkan nilai data yang hilang.

Selain fungsi `mean`, `sapply()` dapat menggunakan fungsi `mean`, `sd`, `var`, `min`, `max`, `median`, dan `range`. Jika pada post [Uji Reliabilitas](https://linhub.io/r/2017/03/15/melakukan-uji-reliabilitas-dengan-r.html) kita menggunakan paket `psych` maka statistik deskriptif juga dapat dilakukan dengan fungsi `psych::describe()`.

    > library(psych) 
    > psych::describe(data_frame_or_matrix, na.rm = TRUE)

Perintah tersebut akan menampilkan statistik dekriptif yang terdiri dari `mean`, `sd`, `median`, `mad`, `min`, `max`, `skew`, `kurtosis`, `se`. Selain itu kita juga dapat mengelompokkan statistik deskriptif berdasarkan variabel tertentu dengan fungsi `psych::describe.by()`.

    > library(psych) 
    > psych::describe.by(data_frame_or_matrix, group, ...)

Selamat mencoba ...
