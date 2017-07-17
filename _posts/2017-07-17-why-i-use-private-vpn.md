---
layout: post
title: "Why I Use Private VPN"
subtitle: ""
description: ""
category: Internet
tags: [internet, vpn, privasi]
---
{% include JB/setup %}

Beberapa saat lalu kita mendengar tentang berita bahwa akan diblokirnya [Telegram](https://telegram.org/), yang kemudian disusul dengan adanya berita bahwa [pemerintah Indonesia akan meminta akses penyadapan pada Telegram](http://news.metrotvnews.com/politik/ZkePmrrb-kapolri-ingin-telegram-beri-akses-penyadapan). Hal ini sangat disayangkan sekali karena menurut saya sebuah privasi adalah bagian dari hak asasi manusia, dan praktik penyadapan ini secara tidak langsung telah melanggar hak kita sebagai manusia. Namun sangat disayangkan sekali praktik-praktik penyadapan ini secara tidak langsung sudah dilakukan dengan tanpa sepengetahuan kita oleh para operator seluler dan juga internet. Seperti yang kita ketahui bahwa ketika kita melakukan pencarian di Google, atau melakukan aktivitas di sosial media maka data kita akan menjadi target pasar mereka. 

Beberapa tahun lalu ketika pertama menggunakan internet dan bermain sosial media saya tidak begitu perduli dengan apa yang disebut dengan privasi. Saya berpikir bahwa "Jika memang tidak ada yang disembunyikan, kenapa harus takut disadap?". Namun seiring dengan berjalannya waktu saya menyadari bahwa hal tersebut tidak demikian seharusnya. Sebagai contoh untuk membuktikannya, saya memiliki sebuah akun _email_ dengan banyak _email_ di dalam _inbox_ saya, lebih dari 40.000 _email_. Bayangkan jika _email-email_ saya dapat diakses oleh semua teman-teman saya di kantor, teman-teman di Telegram. Jika mereka tidak peduli mungkin tidak menjadi masalah, namun bagaimana jika ada yang ingin mencari-cari kesalahan saya. Dengan berbekal _email-email_ tersebut mereka mungkin bisa membuat sebuah cerita yang menyudutkan saya. Dan saya juga tidak ingin bahwa semua percakapan pribadi saya tersebar pada semua orang.

Dengan berbekal contoh pada penggunaan _email_, bagaimana dengan percakapan anda melalui SMS, bagaimana percakapan anda melalui aplikasi percakapan instan lainnya? Bagaimana dengan data _browsing_ sehari-hari anda?

Kemudian saya mengenal tentang melindungi privasi dengan menggunakan _Virtual Private Network_ atau yang lebih dikenal dengan VPN. Sebuah VPN pada dasarnya digunakan untuk

1. Melakukan enkripsi pada jaringan yang anda gunakan, untuk melindungi aktivitas _online_ anda dari penyadapan  
2. Memanipulasi alamat IP yang anda gunakan sehingga nampak dari lokasi yang berbeda  

Pada tahun 2015 saya sering menggunakan layanan VPN gratisan, mau gimana lagi saya ini penggemar gratisan. Namun kemudian saya sadar bahwa pemberi layanan ini tidak mungkin memberikan layanan secara cuma-cuma, pasti ada hal yang dikorbankan. Kemudian saya mendengar sebuah komentar dari Andrew Lewis yang berbunyi

> "If you are not paying for it, you're not the customer; you're the product being sold"

Weeew ... dengan menggunakan layanan VPN gratisan secara tidak langsung kita telah menjadi produk yang dijual oleh pemberi layanan. Hal ini cukup masuk akal, dan hal ini pula yang mendorong saya untuk beralih ke layanan VPN berbayar di tahun yang sama. Dengan biaya sekitar 60 USD per tahun saya menggunakan sebuah layanan VPN berbayar dengan berbagai macam fitur yang ditawarkan.

Namun apakah memang dengan menggunakan layanan VPN berbayar yang menjanjikan

> We don't log, period.  

Benar-benar tidak melakukan _logging_ pada data kita untuk dijual atau dijadikan bahan riset?

Kita tidak benar-benar bisa melakukan verifikasi untuk hal ini bukan? Misal terjadi kesalahan maka akan dengan mudah mereka menyalahkan kita sebagai pengguna, data kita ada di tangan mereka. Lalu bukankah dengan melakukan penjualan data pengguna maka pemberi layanan ini akan kehilangan bisnis mereka? 

Sekitar tahun 2011 sebuah layanan VPN berbayar ditemukan menjual data penggunanya, hal ini bisa kamu baca pada laman [ini](http://www.theregister.co.uk/2011/09/26/hidemyass_lulzsec_controversy/). Dan fakta yang mengejutkan kebanyakan penggunanya seakan tidak peduli, atau bahkan tidak tahu.

Dengan fakta-fakta tersebut maka saya pun berpikir untuk menggunakan sebuah layanan VPN personal, dengan berbekal sebuah _droplet_ di Digital Ocean saya pun membuat sebuah VPN personal. Dengan hal ini maka kekhawatiran akan kemungkinan penyadapan akan semakin kecil, karena kita sendiri yang memiliki data kita.

Lalu kembali kepada kemungkinan penyadapan yang dilakukan pemerintah, apakah anda rela?