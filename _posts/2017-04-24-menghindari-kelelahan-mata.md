---
layout: post
title: "Menghindari Kelelahan Mata"
subtitle: "Menggunakan Redshift"
description: "Menghindari kelelahan mata dengan redshift pada linux"
category: Others
tags: [redshift]
---
{% include JB/setup %}

Beberapa hari belakangan ini mata saya mulai mudah lelah, mungkin efek sehabis sakit atau efek lainnya. Untuk sedikit mengurangi kelelahan mata ini saya menemukan artikel menarik pada blog teman [disini](https://yogayudistira.id/linux/2016/11/14/menghindari-kelelahan-mata-menggunakan-redshift.html). Sehingga saya pun tertarik menggunakan [redshift](https://github.com/jonls/redshift/releases/) ini. Setelah melakukan instalasi ternyata konfigurasi default dari redshift yang harus kita buat manual tidak bekerja dengan baik.

> Muncul pesan "Screen 1 Could Not Be Found"

<img src="{{ site.baseurl }}/img/lieur.png" class="img-sticker" alt="Lieur">

Saya kan cuma pake satu _screen_ kok ini dibilang ga bisa ketemu, kemudian terlintas pada pikiran saya untuk merubah baris 

    [randr]
    ;screen=1 ini adalah nilai default
    screen=0

Karena kemungkinan pembacaan yang dimulai dari 0. _Well_ .. ternyata berjalan sesuai yang diharapkan, _but wait_ .. ini kok ngaco proses perpindahannya. Selidik punya selidik ternyata pada berkas `redshift.conf` pengaturan untuk `location-provider` diatur ke `manual`, dan pada section `[manual]` _lat_ serta _lon_ ga sesuai dengan lokasi saya saat ini. Kemudian saya menggunakan layanan daring untuk mencari _lat_ dan _lon_ untuk kota saya dan merubah menjadi

    [manual]
    lat=-4.4553220
    lon=137.1362130

Hmmm .. sudah berjalan dengan harapan. Namun masalah muncul kembali, ternyata `redshift` ini tidak secara otomatis dijalankan ketika _startup_. Saya pun membuat _entry startup_ baru dengan _command_ berisikan `/usr/bin/redshift`. Voila `redshift` akan dijalankan setelah saya menyalakan T430 kesayangan ini.

<img src="{{ site.baseurl }}/img/sebatman.png" class="img-sticker" alt="Sebatman">
