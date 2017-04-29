---
layout: post
title: "Mudah Menggunakan Tempel CLI"
subtitle: "Tempel-CLI dari Blankon"
description: "Mudah menggunakan tempel-cli dari blankon"
category: Python
tags: [tempel, cli]
---
{% include JB/setup %}

Mungkin beberapa dari kalian sudah membaca post saya [berikut](https://linhub.io/shell/2017/04/17/akses-clipboard-dari-terminal/) dimana saya _mention_ tentang aplikasi tempel dari Blankon Linux. Meskipun secara _default_ tempel ini hanya ada di Blankon namun kita bisa memasang pada distro yang kita gunakan. Untuk menggunakan tempel pada distro kesayangan kita cukup _clone_ dari repo tempel dengan perintah

    $ git clone https://github.com/BlankOn/tempel-cli-py.git

Kemudian gunakan `.bashrc` agar dapat memanggil perintah `tempel`, pastikan bahwa berkas `tempel` sudah mendapat _permission_ untuk eksekusi.

    export PATH=/path/ke/tempel:$PATH

Lalu buka teminal baru atau gunakan perintah `source ~/.bashrc`. Atau dengan memindahkan berkas `tempel` ke `/usr/bin/` dan `/usr/local/bin/`.Untuk menggunakan `tempel` sendiri sangat mudah, misal anda ingin berbagi hasil keluaran dari `dmesg` maka dapat dilakukan dengan

    $ dmesg | tempel bash -s

Atau jika ingin menggunakan teks biasa dapat dilakukan dengan perintah

    $ tempel -t 'teks`

Dan bila ingin berbagi dari isi berkas dapat dilakukan dengan perintah

    $ tempel bash -s /path/ke/script.sh

Secara _default_ `tempel` mengambil data dari _clipboard_ sehingga memudahkan kita ketika ingin berbagi sumber teks ke teman melaui layanan [tempel.blankon.in](https://tempel.blankon.in/).

Selamat mencoba ...