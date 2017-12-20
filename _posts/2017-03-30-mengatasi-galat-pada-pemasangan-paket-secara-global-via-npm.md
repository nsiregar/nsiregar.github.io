---
layout: post
title: "Mengatasi Galat pada Pemasangan Paket Secara Global via NPM"
subtitle: "Memperbaiki Permissions NPM pada Ubuntu 16.04"
description: "Mengatasi Galat pada Pemasangan Paket Secara Global via NPM pada Ubuntu 16.04"
category: NodeJS
tags: [npm, nodejs, firebase]
---
{% include JB/setup %}

Ketika sedang mencoba [Firebase](https://firebase.google.com/) diperlukan pemasangan paket `firebase-tools` secara global. Namun ketika saya menjalankan perintah
<!--more-->

    $ npm install -g firebase-tools

Terjadi galat dikarenakan isu _permissions_, hal ini membingungkan saya karena selain saya tidak ingin menggunakan akses `sudo` untuk instalasi tersebut seharusnya pemasangan tersebut bisa berjalan dengan normal. Karena galat tersebut artinya `npm` tidak memiliki akses untuk melakukan tulis pada direktori yang digunakan untuk menyimpan paket secara global. Untuk mengetahui dimana paket tersebut disimpan gunakan perintah

    $ npm config get prefix

Pada Ubuntu 16.04 saya menampilkan hasil sebagai berikut

<img src="{{ site.baseurl }}/img/npm-dir.png" class="img-responsive" alt="NPM Direktori">

Dikarenakan saya tidak ingin menambah kerumitan, maka cara yang bisa dilakukan adalah dengan mengubah direktori pemasangan paket ke direktori lain. Hal ini dapat dilakukan dengan

1. Membuat direktori untuk pemasangan global
```
$ mkdir ~/.npm-global
```
2. Mengkonfigurasi `npm` pada path direktori baru
```
$ npm config set prefix '~/.npm-global'
```
3. Mengubah berkas `~/.profile` dan menambah baris berikut
```
export PATH=~/.npm-global/bin:$PATH
```
4. _Update_ variabel sistem
```
$ source ~/.profile
```

Untuk menguji maka lakukan pemasangan paket `firebase-tools` dengan cara

    $ npm install -g firebase-tools

Selamat mencoba ...

> Update 30 Maret 2017

Artikel alternatif : [https://nsetyo.id/post/npm-install-user-dir/](https://nsetyo.id/post/npm-install-user-dir/)