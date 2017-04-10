---
layout: post
title: "Getting Help on Terminal"
subtitle: "Menggunakan man dan apropos untuk Bantuan"
description: "Menggunakan man dan apropos untuk bantuan"
category: Shell
tags: [shell, linux, man, apropos]
---
{% include JB/setup %}

Sering kali ketika sedang menghadapi persoalan pada program yang berjalan diatas terminal kita akan mencari bantuan dengan bertanya kepada teman-teman atau bertanya pada forum di internet. Namun ada beberapa cara yang cukup mudah dilakukan ketika kita memerlukan bantuan _shell_ linux.

### Menggunakan `man`
Dengan menggunakan `man` maka akan memberikan bantuan berupa dokumentasi, konfigurasi, dan lainnya untuk program yang kita jalankan. Perintah ini cukup membantu ketika kita sedang tidak terhubung dengan internet.

<img src="{{ site.baseurl }}/img/man-shutdown.png" class="img-responsive" alt="Shutdown man">

Keluaran dari `man` cukup mirip dengan `less`, dan yang lebih _mengedjoetkan_ kita bisa menggunakan perintah `$ man man` untuk mengetahui lebih detail tentang `man`.

### Menggunakan `apropos`
Namanya manusia selalu diliputi oleh penyakit lupa, ketika kita sedang lupa nama program untuk keperluan tertentu kita dapat menggunakan perintah `apropos`. Sebagai contoh jika anda lupa perintah yang berkaitan dengan jaringan, anda dapat mengetik perintah `$ apropos network`.

<img src="{{ site.baseurl }}/img/apropos-network.png" class="img-responsive" alt="Network apropos">

Perintah `apropos` cukup simple, dimana program tersebut mencari pada hasil `man` yang sesuai dengan kata pencarian yang diberikan.

### Menggunakan Sumber Lain
Ketika berkunjung ke blog teman di [Se7enTime](https://se7entime.wordpress.com/) saya mendapat informasi mengenai penggunaan [DuckDuckGo](https://duckduckgo.com/), selain itu kita bisa bertanya di [StackExchange](http://unix.stackexchange.com/), membaca manual [Debian](https://www.debian.org/doc/) dan [Arch](https://wiki.archlinux.org).
