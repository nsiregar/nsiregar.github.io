---
layout: post
title: "Optimasi Linhub.IO"
subtitle: "Part 2"
description: "Think With Google Optimization"
category: 
tags: [css, google, optimization]
---
{% include JB/setup %}  
Masih lanjut dari artikel [optimasi](https://linhub.io/2017/02/16/optimasi-linhubio) sebelumnya, dimana saya melihat skor teman di [blognya](https://nsetyo.com) dengan skor  

<img src="{{ site.baseurl }}/img/nsetyo.png" class="img-responsive" alt="situs sty">  

dimana cukup tinggi dengan skor sempurna pada _mobile friendliness_, akhirnya saya memutuskan untuk sedikit mengubah tampilan dengan tetap mempertahankan performa hal yang saya lakukan 
antara lain :  

- Mengurangi berkas `.css` menjadi satu file dengan ukuran 8KB atau lebih kecil  
    Untuk melakukan proses ini saya menggunakan bantuan dari [UnCSS Online](https://uncss-online.com/) untuk membuang style yang tidak digunakan, serta [CSS Compressor](http://csscompressor.com/) 
    untuk mengurangi ukuran dari berkas css, ukuran berkas terakhir 8.16KB cukuplah ya ..  

- Mengurangi ukuran berkas `.js`  
    Untuk melakukan proses ini saya menggunakan [JS Compress](https://jscompress.com/), serta mengubah full jquery menjadi sebuah fungsi sederhana untuk mengurangi ukuran berkas menjadi 
    993B saja.  

Wow .. wow .. wow ..  
Ukuran berkas berhasil dikurangi kemudian saya menggunakan tool [CSS Delivery Tool](https://varvy.com/tools/css-delivery/) untuk memeriksa apakah sudah memenuhi syarat, dan berikut hasilnya  

<img src="{{ site.baseurl }}/img/css-delivery.png" class="img-responsive" alt="css delivery">  

Sepertinya sudah lebih baik mari kita uji performa situs ini  

<img src="{{ site.baseurl }}/img/performance-linhub.png" class="img-responsive" alt="performance-linhub">  

Wow sungguh mengedjoetkan sekali, mari kita uji situs [nsetyo](https://nsetyo.com)  

<img src="{{ site.baseurl }}/img/performance-nsetyo.png" class="img-responsive" alt="performance-nsetyo">  

Akhirnya bisa sedikit lebih cepat, walaupun jika [nsetyo](https://nsetyo.com) melakukan optimasi maka akan berbeda jauh. Tapi hal ini mengingatkan saya akan situs pertama yang saya gunakan 
sebagai acuan mari kita buktikan  

<img src="{{ site.baseurl }}/img/performance-rizaumami.png" class="img-responsive" alt="performance-rizaumami">  

Ajegile ternyata ini lebih wow dari yang saya bayangkan, page di-load hanya dalam *0.32s* berbeda cukup jauh dengan linhub di angka *1.69s* (T_T).  
Tapi bukan itu tujuan kita, mari kita uji dengan [Think With Google](https://testmysite.thinkwithgoogle.com/) apakah ada peningkatan ..  

<img src="{{ site.baseurl }}/img/new-linhub.png" class="img-responsive" alt="performance-baru">  

Dan setelah proses panjang diatas kesimpulan yang saya ambil adalah  
## Saya perlu istirahat ...