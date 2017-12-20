---
layout: post
title: "Trik Terminal pada Ubuntu 16.04"
subtitle: "Pintasan Yang Sering Digunakan"
description: "Menggunakan pintasan pada terminal ubuntu 16.04"
category: Shell
tags: [trik, shortcut, ubuntu]
---
{% include JB/setup %}

Hari ini, setelah bersepeda keliling kota Timika saya mengirim sepeda fixie kesayangan untuk _check up_ pada bengkel sepeda langganan saya. Ternyata prosesnya lumayan lama hingga harus menginap, hal ini menggagalkan rencana saya untuk bersepeda pada sore harinya. Setelah sampai dirumah saya mengalami rasa **mager** yang luar biasa, mo ngapa-ngapain males.

<!--more-->
Baru malam ini saya _keinget_ akan janji _One Day One Article_, karena lagi males kali ini saya ingin membagi trik yang sering saya gunakan ketika menggunakan terminal pada Ubuntu 16.04

### _Copy_ dan _Paste_ pada Terminal
Mungkin kalian sering menemukan tutorial yang menggunakan perintah pada terminal, karena males kalian langsung menggunakan fitur _copy paste_. Namun ternyata kalian tidak bisa menggunakan kombinasi `CTRL+V` ketika melakukan _paste_ pada terminal. Untuk melakukan operasi ini, kalian hanya perlu menggunakan kombinasi `CTRL+SHIFT+V` untuk _paste_ ke terminal dan `CTRL+SHIFT+C` untuk _copy_ perintah dari terminal. Tapi sebelum melakukan itu ada baiknya kalian membaca artikel dari [Pak Haji Mimin berikut](https://rizaumami.github.io/2017/04/01/jangan-sembarang-menjalankan-baris-perintah/).

### Lupa _Command_ yang pernah dijalankan
Sering utak-atik menggunakan perintah melalui terminal? Terus pada suatu ketika ingin menjalankan lagi tapi lupa? Gampang banget. Untuk mengetahui _command_ yang pernah kita jalankan, kamu bisa membuka berkas `.bash_history` pada folder _home_. Atau jika melalui terminal kamu bisa menggunakan kombinasi `CTRL+R` untuk mencari _command_ yang pernah dijalankan berdasar _input_ yang kamu berikan. Atau kamu juga bisa menggunakan perintah `history`, ketika sudah menemukan perintah yang maksud lanjutkan dengan mengetik `![angka baris]` (mis. !123).

### Menghapus Perintah
Pernah ga sih, ketika sudah mengetik perintah yang panjang terus terpikir 'eh kayanya salah deh!' lalu kalian mau menghapus perintah panjang tadi dengan menekan `BACKSPACE` berkali-kali. _Wait!!_ ada cara yang lebih mudah, untuk menghapus pada terminal ada beberapa cara. Jika kamu cuma ingin menghapus satu kata di belakang _cursor_ gunakan `CTRL+W`, jika `CTRL+W` menghapus satu kata ke arah kiri maka dengan `CTRL+K` kamu bisa mengapus satu kata ke arah kanan. Lalu bagaimana jika ingin menghapus seluruhnya? Gunakan kombinasi `CTRL+U` untuk menghapus perintah dalam satu baris.

### Memindah _Cursor_
Kadang kita ingin merubah perintah yang pernah dijalankan, umumnya kita akan menggunakan tombol `ARROW` untuk memindahkan _cursor_ pada kata yang ingin dirubah. Ada cara lebih mudah dibandingkan menggunakan `ARROW`, kamu bisa menggunakan `ALT+F` untuk memindahkan _cursor_ satu kata kekanan dan `ALT+B` untuk memindahkan _cursor_ satu kata kekiri.

Jadi itu adalah beberapa trik yang biasa saya gunakan ketika sedang bekerja dengan terminal. Selamat mencoba!


PS: Ini biasa saya pakai di Ubuntu, ga tau kalo di distro lain.
