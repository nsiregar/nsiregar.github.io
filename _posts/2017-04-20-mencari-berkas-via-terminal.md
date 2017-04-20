---
layout: post
title: "Mencari Berkas via Terminal"
subtitle: "Menggunakan locate"
description: "mencari berkas via terminal"
category: Shell
tags: [shell, locate]
---
{% include JB/setup %}

Hari ke-3 dalam proses penyembuhan dari malaria, 9 butir obat utama sudah habis sisa 11 butir obat tambahan yang harus dihabiskan dalam 11 hari kedepan.

> Doakan saya pemirsa

Hari ini saya masih akan membagikan tips sederhana, tips kali ini adalah untuk mencari berkas dengan menggunakan perintah `locate`. Perintah ini dijalankan seperti berikut

    $ locate [opsi] nama

Perintah ini menghasilkan alamat dari berkas yang kita cari secara lengkap. `locate` dapat menerima _wildcard_ atau _regex_, opsi yang biasa saya gunakan adalah `-n` dan juga `-i`. Opsi `-n` untuk membatasi jumlah yang ditampilkan misal.

    $ locate -n 15 "hohohihe.zip"

Maka akan hanya akan menampilkan 15 hasil dari pencarian, sedangkan opsi `-i` digunakan untuk membuat pencarian _case insensitive_ misal.

    $ locate -i "Hohohihe.ZIP"

Maka akan menampilkan semua kombinasi dari `hohohihe.zip`. Perintah ini kadang cukup berguna, namun mungkin kalian terbiasa menggunakan `find`. Ngomong-ngomong saya harus minum obat lagi.