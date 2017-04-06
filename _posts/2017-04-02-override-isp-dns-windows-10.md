---
layout: post
title: "Override ISP DNS Windows 10"
subtitle: "Menggunakan Simple DNSCrypt pada Windows 10"
description: "Menggunakan simple dnscrypt pada windows 10 untuk mengatasi DNS hijack dari ISP"
category: Windows
tags: [dns, dnscrypt, windows]
---
{% include JB/setup %}

Dari semalam saya masih bingung bagaimana memperbaiki instalasi Ubuntu saya yang rusak, untungnya tidak ada data penting hanya sistem. Saya juga telah mengunduh `.iso` terbaru dari Ubuntu 16.04.2 sebagai bahan jika memang instalasinya tidak bisa sembuh. Jadi sementara saya masih menggunakan Windows 10 sebagai sistem operasi utama, namun ada yang mengganjal hati saya ketika menggunakan sistem operasi ini. Yang mengganjal hati pertama kali adalah masalah _DNS Hijacking_ yang dilakukan operator seluler yang saya gunakan, Telkomsel, dimana hal tersebut mengakibatkan saya tidak bisa membaca sumber berita dari situs kesayangan [Reddit](https://reddit.com), membuka gambar dari [Imgur](https://imgur.com), dan lain sebagainya.

Hal pertama yang saya lakukan untuk masalah ini adalah dengan mencoba trik seperti artikel [Menggunakan OpenDNS di Ubuntu 16.04](https://linhub.io/tips%20and%20trick/2017/03/24/menggunakan-opendns-di-ubuntu-1604), dengan mengubah setting DNS ke OpenDNS pada `IPv4 Properties` namun cara ini tidak membuahkan hasil seperti yang diinginkan. Windows 10 malah tidak bisa melakukan _resolve hostname_, meskipun sudah melakukan perintah `ipconfig /flushdns` dan `ipconfig /registerdns`.

<img src="{{ site.url }}/img/ip4-prop.png" class="img-responsive" alt="IPv4 Properties">

Akhirnya saya mencari informasi mengenai bagaimana `DNS Resolver` bekerja pada Windows 10, namun sebelum membaca lebih jauh saya teringat kembali artikel dari Pak Haji Ali mengenai DNSCrypt di [sini](https://situsali.com/mengakses-situs-terblokir-dengan-dnscrypt-di-arch-linux/). Daripada ribet tentang bagaimana `DNS Resolver` bekerja pada Windows 10, saya memutuskan untuk memasang [Simple DNSCrypt](https://simplednscrypt.org/). SimpleDNSCrypt sendiri merupakan _tool_ yang mempermudah kita untuk mengkonfigurasi `dnscrypt-proxy` pada lingkungan Windows. Setelah melakukan instalasi berikut adalah setting yang saya gunakan

<img src="{{ site.url }}/img/simplednscrypt.png" class="img-responsive" alt="Simple DNSCrypt">

Saya menggunakan `resolver` basis Indonesia dengan harapan untuk kecepatan _resolving_ yang lebih baik. Kemudian untuk memastikan saya tidak lagi mengalami _DNS hijacking_ dari ISP, saya melakukan test pada [DNS Leak Test](https://dnsleaktest.com) dan berikut hasilnya

<img src="{{ site.url }}/img/dnsleaktest.png" class="img-responsive" alt="DNS Leak Test">

Yey akhirnya situs kesayangan bisa diakses kembali ...

BTW setelah melakukan instalasi Simple DNSCrypt kita tidak perlu mengutak-atik _IPv4 Properties_, semua otomatis.