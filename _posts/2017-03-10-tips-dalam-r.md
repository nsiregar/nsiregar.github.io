---
layout: post
title: "Tips dalam R"
description: "Tips kdalam R"
category: r
tags: [r, tips]
---
{% include JB/setup %}

Berikut adalah beberapa tips yang saya pelajari ketika belajar menggunakan R

### Menambahkan Komentar pada Objek R
Jadi ketika sudah bermain dengan data yang cukup kompleks biasanya kita akan bingung, kebiasaan saya hanya menyingkat nama menjadi beberapa karakter. Untunglah pada R semua objek memiliki atribut - salah satunya adalah komentar. Untuk menampilkan atau menulis komentar pada objek dapat menggunakan perintah `comment()`.

    > x <- c(2, 3, 5, 4, 3, 6)
    > comment(x)
    NULL

    > comment(x) <- "Variabel Pertama"

    > comment(x)
    [1] "Variabel Pertama"

Kesimpulannya gunakan `comment()` untuk membantu mengingat objek yang anda buat.


### Item NA
`NA` adalah representasi untuk objek yang tidak ada, biasanya karena memang tidak ada atau data frame yang memiliki kolom tidak seimbang sehingga harus ditambahkan item `NA`. Terkadang ketika kita memanggil fungsi akan terjadi galat karena item `NA`, untuk itu dapat menggunakan `na.rm = TRUE`

    > x
    [1] 2 4 3 6 2 8 NA NA


    > mean(x)
    [1] NA

    > mean(x, na.rm = TRUE)
    [1] 4.166667

Tapi tidak semua bisa menggunakan `na.rm = TRUE`, adakalanya kita juga menggunakan `na.omit()`

    > length(x, na.rm = TRUE)
    Error in length(x, na.rm = TRUE) :
    2 arguments passed to 'length' which requires 1

    > length(na.omit(x))
    [1] 6

