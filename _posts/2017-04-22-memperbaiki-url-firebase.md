---
layout: post
title: "Memperbaiki URL Firebase"
subtitle: "Menggunakan cleanUrls Firebase"
description: "Memperbaiki laporan 404"
category: Firebase
tags: [firebase, jekyll, web, travis]
---
{% include JB/setup %}

Semalam ketika saya sedang membuka Google Search Console dan memeriksa _Crawl Errors_ alangkah terkejutnya saya dikarenakan banyaknya laporan yang menunjukkan galat 404, dengan total sekitar 29 halaman dilaporkan memiliki galat 404. Setelah saya periksa ternyata hal ini berhubungan dengan perubahan url yang dituju, jika sebelumnya pada Github Pages saya bisa mengakses halaman <https://linhub.io/blogroll> tanpa ada masalah, namun pada hosting Firebase ini ternyata mewajibkan penggunaan `.html` untuk menuju halaman yang kita inginkan.

<!--more-->
Untuk mengatasi ini Firebase menyediakan sebuah opsi yaitu `cleanUrls`, opsi ini berguna untuk secara otomatis melakukan _drop_ pada ekstensi `.html` sehingga url yang kita tuju akan lebih cantik.

Untuk menggunakan fitur ini saya hanya menambahkan baris berikut pada berkas `firebase.json`

    "cleanUrls": true

Dengan begitu saya dapat mengakses <https://linhub.io/blogroll> tanpa harus di redirect ke 404.