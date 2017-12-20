---
layout: post
title: "Akses Clipboard dari Terminal"
subtitle: "Menggunakan xclip Untuk Akses Clipboard"
description: "Menggunakan xclip untuk akses clipboard dari terminal"
category: shell
tags: [xclip, shell]
---
{% include JB/setup %}

Mungkin beberapa dari kalian pernah menggunakan program `tempel` dari [Blankon Linux](https://github.com/BlankOn/tempel-cli-py) dimana program tersebut dapat melakukan _piping_ dari output yang kita inginkan ke layanan [Blankon Tempel](https://tempel.blankon.in/). Lalu bagaimana jika kita ingin agar output dapat kita _paste_ ke tempat lain, misalnya sebuah _text editor_.

<!--more-->
Dengan menggunakan program bernama `xclip` kita dapat melakukan hal tersebut, yang harus kita lakukan pertama kali adalah memasang `xclip` pada sistem dengan perintah

    $ sudo apt install xclip

Dengan begitu kita dapat melakukan _piping_ terminal output ke _clipboard_ dengan perintah

    $ dmesg | xclip -selection clipboard

Mungkin untuk beberapa orang perintah tersebut sangat panjang, untuk itu kita dapat membuat alias dengan merubah berkas `.bashrc`. Tambahkan baris berikut pada berkas `.bashrc` milik anda.

    alias xcopy='xclip -selection clipboard'
    alias xpaste='xclip -selection clipboard -o'

Simpan dan _refresh_ bash untuk mengaktifkan _setting_ yang baru kita tambahkan. Dengan penggunaan alias tersebut maka perintah sebelumnya dapat dipanggil dengan.

    $ dmesg | xcopy

Selamat mencoba ...