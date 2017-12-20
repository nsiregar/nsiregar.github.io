---
layout: post
title: "SSH Tunneling"
subtitle: "Menggunakan AutoSSH pada Ubuntu 16.04"
description: "Menggunakan autossh untuk mempermudah ssh tunneling pada Ubuntu 16.04"
category: Shell
tags: [ssh, tunnel, autossh]
---
{% include JB/setup %}

Akhirnya saya kembali menggunakan Ubuntu 16.04, namun kali ini bukan Ubuntu dengan Unity melainkan dengan GNOME. Agak nyesek sih waktu denger Unity mau dimatiin, walau banyak juga yang membuat proyek porting untuk mempertahankan kelangsungan Unity. Sebenarnya hari ini saya ingin menulis tentang _full text searching_ pada situs statis seperti yang saya gunakan, namun implementasi terhambat karena desain situs ini yang kurang ramah jika menggunakan _box_ pencarian. Kemungkinan saya akan merubah sedikit tampilan dari situs ini selama beberapa saat mendatang. Masih dalam kaul _ODOA (One Day One Article)_ saya tidak ingin absen meskipun satu hari, sekaligus untuk melatih kemampuan menulis.

<!--more-->
Ketika membaca artikel di UbuntuBuzz mengenai penggunaan _SSH Tunneling_ di [sini](http://www.ubuntubuzz.com/2015/07/ssh-tunneling-in-linux-made-easy-plus-dns-encryption.html) saya teringat akan sebuah trik yang diajarkan seorang teman tentang _SSH Tunneling_ ini. Masalah yang biasa kita alami ketika melakukan _tunneling_ adalah tiba-tiba koneksi terputus, sehingga membuat kita mengulang perintah ssh pada terminal.

Untuk mengatasi masalah ini kita dapat menggunakan AutoSSH, untuk memasang AutoSSH pada Ubuntu 16.04 gunakan perintah `$ sudo apt install autossh`, secara umum penggunaannya sama seperti yang dijelaskan artikel diatas. Namun untuk mempermudah agar AutoSSH berjalan saat _booting_ perangkat yang digunakan, kita dapat membuat _systemd service_, berikut adalah contoh sederhana untuk _systemd service_

    $ sudo nano /etc/systemd/system/autossh-perpoks.service
    [Unit]
    Description=AutoSSH Perpoks 1080
    After=network.target

    [Service]
    Environment="AUTOSSH_GATETIME=0"
    ExecStart=/usr/bin/autossh -M 0 -o kodok@linhub.io -p 443 -ND 1080 -v

    [Install]
    WantedBy=multi-user.target

Kemudian jalankan perintah berikut untuk menambahkan _service_ pada _systemd_

    systemctl daemon-reload

Jalankan _service_ dengan

    systemctl start autossh-perpoks.service

Untuk menambahkan pada saat _booting_ gunakan perintah

    systemctl enable autossh-perpoks.service

Dengan begitu kita dapat bermain _SSH Tunneling_ dengan nyaman.
