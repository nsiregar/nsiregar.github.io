---
layout: post
title: "Menulis Karakter Unicode pada Telegram Desktop Linux"
description: "Input Unicode Character to Telegram Desktop"
category: Telegram
tags: [telegram, qt, ibus]
---
{% include JB/setup %}  

Baru teringat tentang postingan teman di [kabayankababayan](https://rizaumami.github.io/2015/07/10/menulis-karakter-unicode-dalam-linux/) mengenai menulis karakter unicode 
dalam linux. Namun metode ini ternyata tidak bisa dijalankan pada aplikasi Telegram Desktop dikarenakan Telegram dibangun dengan Qt, akan tetapi ada cara untuk menggunakan 
kombinasi `CTRL`, `SHIFT`, dan `U`.  

Disini saya menggunakan Ubuntu 16.04, mungkin akan sedikit berbeda jika menggunakan distro lain, pertama install paket `gnome-panel`  
`$ sudo apt install --no-install-recommends gnome-panel`  

Lalu buat shortcut desktop dengan perintah  
`$ gnome-desktop-item-edit --create-new ~/Desktop`  

Maka akan muncul dialog seperti berikut  
<img src="{{ site.baseurl }}/img/newlauncher.png" class="img-responsive" alt="newlauncher">  

Pada bagian *command* isi dengan kode berikut  
`env QT_IM_MODULE=ibus /path/to/Telegram --%u`  

Voila ... sekarang kita bisa menggunakan kombinasi `CTRL`, `SHIFT`, dan `U` untuk menginput karakter unicode dengan menjalankan Telegram via shortcut yang kita buat.   