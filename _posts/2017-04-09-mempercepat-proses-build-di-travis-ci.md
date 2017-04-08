---
layout: post
title: "Mempercepat Proses Build di Travis CI"
subtitle: "Menggunakan Fitur Caching pada Travis CI"
description: "Menggunakan fitur caching untuk mempercepat proses build pada Travis CI"
category: TravisCI
tags: []
---
{% include JB/setup %}

Seperti yang sudah saya tulis sebelumnya, [linhub](https://linhub.io/) telah menggunakan CI dengan memanfaatkan layanan dari Travis-CI. Ketika pertama kali menggunakan layanan ini proses _build_ untuk berkas statis terasa begitu lama, dimana memerlukan waktu sekitar **2 menit**. Dengan 2 menit kita bisa melakukan hal-hal lain daripada hanya duduk bengong menunggu hasil build.

<img src="{{ site.url }}/img/caching-travis.png" class="img-responsive" alt="Caching Travis">

Untuk mencoba mengurangi waktu ini, saya melakukan metode _caching_ pada berkas-berkas yang sering digunakan

### Caching pada direktori `_site`
Seperti yang kita ketahui, jekyll menggenerate berkasnya pada direktori `_site`, untuk mempercepat proses _generate_ maka saya melakukan _caching_ pada direktori ini dengan menambah baris berikut pada `.travis.yml`

    cache:
        - directories:
            - _site

Selain itu saya juga menambahkan parameter `incremental: true` pada `_config.yml`, hal ini agar jekyll menggenerate berkas yang memang ada perubahan saja.

### Caching pada direktori `.rvm` dan `.nvm`
Ketika melakukan perintah `rvm install` dan `npm install` memerlukan waktu sekitar 14 detik untuk masing-masing perintah

<img src="{{ site.url }}/img/rvm-install.png" class="img-responsive" alt="rvm">

<img src="{{ site.url }}/img/npm-install.png" class="img-responsive" alt="nvm">

Karena itu saya menambahkan baris

    cache:
        - directories:
            - _site
            - $HOME/.rvm
            - $HOME/.nvm

Hal ini cukup membantu mengurangi waktu yang diperlukan untuk mengunduh paket-paket yang diperlukan.

### Menggunakan Opsi `sudo: false`
Ketika menggunakan opsi `sudo: false` pada `.travis.yml` maka akan memerintahkan travis untuk melakukan build dengan lingkungan _container-based_ hal ini cukup mempercepat proses build sekitar 19 - 46 detik.

Setelah melakukan proses diatas maka berikut adalah waktu untuk proses build yang diperlukan

<img src="{{ site.url }}/img/final-travisoptimization.png" class="img-responsive" alt="Final Travis">

**Ah Elaaah .. ga berasa juga bedanya ....**