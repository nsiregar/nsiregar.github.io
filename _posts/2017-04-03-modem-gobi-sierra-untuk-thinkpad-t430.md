---
layout: post
title: "Modem Sierra Gobi 3000 untuk Thinkpad T430"
subtitle: "Uwoo Uwoo"
description: "Penggunaan modem gobi sierra 3000 pada thinkpad t430"
category: Thinkpad
tags: [gobi, thinkpad, modem]
---
{% include JB/setup %}

Beberapa hari lalu saya mendapat modem Sierra Gobi 3000 untuk dipasang pada laptop kesayangan bentuknya kurang lebih seperti ini

<img src="{{ site.url }}/img/modem-gobi.jpg" class="img-responsive" alt="Modem Gobi">

Dengan begitu semangat saya langsung coba pasang, dan ketika boot ke Ubuntu 16.04 jreng .. jreng .. . Modem sih kedetek tapi ya gitu sinyalnya kok CDMA, baca-baca dan juga curhat ama anak-anak Pegelinux katanya musti diaktivasi pakai Windows. Kan Thinkpad ini ga ada Windowsnya gimana dong ...

Saya tidak menyerah begitu saja, saya mencoba tutorial di internet mengenai bagaimana memasang firmware untuk GSM pada modem ini menggunakan `gobi_loader` dan juga instalasi driver `gobinet` dan `gobiserial`. Walhasil belum mencapai kata sukses, bahkan sekarang instalasi Ubuntu saya menjadi error. Dengan sedikit putus asa akhirya saya memasang Windows 10 sebagai OS kedua pada Thinkpad ini.

Setelah memasang driver yang diperlukan untuk Sierra Gobi 3000, alangkah terkedjoetnya saya bahwa Windows lebih mudah dalam mengubah status `CDMA` ke `GSM`. Bahkan di Windows 10 juga ada aplikasi untuk membaca sms yang masuk tanpa harus menambah program. 

<img src="{{ site.url }}/img/sms-win10.jpg" class="img-responsive" alt="Messaging App">

Hufft ...

Saya berpikir sudah dapat langsung digunakan untuk dial-up menggunakan Windows 10 ini, tetapi oh tetapi masih belum bisa juga untuk digunakan koneksi dial-upnya. Untuk beberapa saat kedepan mungkin saya masih akan menggunakan Windows 10 untuk _trial error_ modem ini. Dan instalasi Ubuntu saya juga masih bingung mau diapakan .. 
