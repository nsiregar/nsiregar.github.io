---
layout: post
title: "Membuat Ishikawa Diagram dengan R"
description: "Membuat Ishikawa diagram dengan R"
category: SixSigma
tags: [r, six sigma, ishikawa, chart]
---
{% include JB/setup %}

Ketika melakukan sebuah _improvement_ salah satu _tools_ yang kita gunakan adalah Diagram Ishikawa, diagram ini merupakan salah satu dari _7 Basic Quality Tools_ yang digunakan untuk menemukan akar permasalahan. Untuk membuat diagram Ishikawa, kita perlu menentukan _Root Cause Category_ antara lain

| 6M | 8P | 5S |
|----|----|----|
| Machine | Product | Surroundings |
| Method | Price | Suppliers |
| Material | Place | Systems |
| Man Power | Promotions | Skills |
| Measurement | People | Safety |
| Mother Nature | Process | |
| | Physical Evidence | |
| | Productivity and Quality | |

Selain kategori diatas kita dapat menggunakan kategori lain yang dianggap mampu untuk membantu mengatur gagasan yang muncul.

> Untuk membuat Diagram Ishikawa menggunakan R diperlukan paket `qcc`, pastikan sudah terpasang pada system anda.

Dengan menggunakan fungsi `cause.and.effect()` kita dapat membuat Diagram Ishikawa dengan menggunakan `list`, berikut adalah contoh pembuatan Diagram Ishikawa

    library(qcc) # load library qcc

    cause.and.effect(
    cause = list( # cause list
        Man = c( "Produktivitas Rendah", "Efektivitas Rendah" ), # category list
        Method = c( "Tidak ada standar baku"),
        Machine = c( "Tingginya waktu perbaikan" ),
        Material = c( "Tidak tersedianya material khusus" )
    ),
    effect = "TAT Unit Underground",
    title = "Diagram Ishikawa - TAT Unit Underground"
    )

Potongan kode diatas akan menghasilkan diagram sebagai berikut

<img src="{{ site.baseurl }}/img/ishikawa.png" class="img-responsive" alt="Diagram Ishikawa">

