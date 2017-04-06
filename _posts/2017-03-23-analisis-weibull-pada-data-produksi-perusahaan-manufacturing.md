---
layout: post
title: "Analisis Weibull pada Data Produksi Perusahaan Manufacturing"
subtitle: ""
description: "Penggunaan analisa weibull pada data produksi perusahaan manufaturing"
category: Intro
tags: [statistic, weibull, intro]
---
{% include JB/setup %}

Analisa Weibull merupakan sebuah metode untuk memperkirakan reliabilitas yang mengeneralisasi aplikasi distribusi, umumnya banyak digunakan dalam menganalisa reliabilitas yang berkaitan dengan rentang waktu (mis. rentang waktu kemungkinan sebuah _equipment_ akan _down_). Dalam proses manufacturing, tehnik ini dapat membantu dalam menjawab pertanyaan seperti 

- Apakah ini masalah produksi atau masalah reliabilitas?  
- Seberapa besar reliabilitas proses di plant saya?  
- Apa saja proses utilisasi/efisiensi yang membebani plant saya?  
- Berapa kapasitas dari plant saya?

Dengan menggunakan tehnik Weibull maka perusahaan dapat menyusun strategi berdasarkan dari jumlah proses yang reliabel. *Tool* ini jika digunakan dengan tepat akan meningkatkan ketersediaan produk terhadap pelanggan, serta meningkatkan _profit_ bagi para _stakeholder_.

Umumnya permasalahan mengenai reliabilitas adalah tentang memiliki banyak informasi namun kurang akan pengetahuan. Setiap proses di suatu plant dapat dipastikan memiliki data perihal spesifikasi dan kondisi dari _equipment_ yang digunakan. Permasalahannya adalah untuk menyampaikan data tersebut agar mudah dipahami oleh setiap orang. Metode paling mudah adalah dengan menggunakan kuantitas keluaran produksi (hal ini dapat berupa jumlah barang atau _revenue_) dari proses dengan data produksi. Umumnya setiap proses produksi memiliki keluaran yang tersusun dalam urutan waktu, beberapa dapat berupa hasil _study_ dalam bentuk statistik untuk melihat pola data.

Analysis Weibull adalah salah satu alat yang bisa digunakan untuk menyusun data tersebut. Grafik Weibull adalah salah satu alat yang akan digunakan untuk membuktikan reliabilitas suatu proses dan menghitung kerugian akibat kegagalan. Ketika produksi kehilangan waktu, maka tidak akan menghasilkan produk, tanpa produk maka tidak akan menghasilkan uang. Jika disampaikan dalam nilai uang atau waktu maka akan lebih mudah dipahami oleh orang pada umumnya.

Biaya yang dikeluarkan akibat kegagalan proses seringkali melebihi biaya dari kegagalan masing-masing _equipment_, Dengan menggunakan grafik weibull maka akan membantu _engineer_, _process owner_, serta _management_ untuk menentukan terkait permasalahan reliabilitas atau produksi.

<img src="{{ site.url }}/img/weibullp.gif" class="img-responsive" alt="weibull plot">