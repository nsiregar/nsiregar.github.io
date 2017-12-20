---
layout: post
title: "This Week with OpenBSD"
subtitle: "Seminggu Bersama OpenBSD"
description: ""
category: OpenBSD
tags: [openbsd, bsd]
---
{% include JB/setup %}

> Everthings has come to an end...

Itu adalah salah satu quote yang cukup saya suka dari seorang admin di grup Telegram yang saya ikuti, selama satu minggu terakhir ini ada banyak kejadian yang terjadi. Baik di dunia sosial melalui Telegram maupun di dunia nyata, tapi yang lebih mengejutkan adalah saya telah menggunakan OpenBSD sebagai sistem operasi _default_ pada laptop kesayangan saya selama satu minggu.

<!--more-->
Lalu apa saja yang telah saya pelajari selama satu minggu ini menggunakan OpenBSD sebagai sistem operasi _default_

### Terminal
Saat ini hidup saya dengan OpenBSD lebih banyak menggunakan terminal. Bahkan hingga artikel ini ditulis saya masih belum memasang _file manager_ seperti `nautilus` atau sejenisnya. Saya lebih sering melakukan pencarian berkas dari dalam terminal. Lalu bagaimana dengan _text editor_? Ya seperti yang pernah saya tulis sebelumnya ketika sedang belajar menggunakan `vim` dan `tmux`, selama sepekan ini saya menggunakan `vim` atau `nano` di OpenBSD.

Dan juga dikarenakan OpenBSD tidak menyediakan antar muka grafis secara _default_, maka hampir semua proses _editing_ melalui terminal.

### Window Manager
Ini adalah hal baru yang saya pelajari, menggunakan _window manager_ dibandingkan dengan _Desktop Environment_. Sebelumnya saya sempat memasang **GNOME** sebagai _Desktop Environmen_ namun merasa kurang pas, karena sebelumnya terbiasa di **Ubuntu** dengan **GNOME**. Akhirnya saya pun memilih `ratpoison` sebagai _Window Manager_ untuk saya gunakan.

Namun versi `ratpoison` yang saya gunakan sedikit berbeda karena saya menggunakan versi yang sudah diubah oleh bapak [Joshua Stein](http://jcs.org). Sehingga antarmuka laptop saya saat ini mirip-mirip dengan yang beliau gunakan.

Namun ada sedikit masalah yang saya hadapi dengan menggunakan _Window Manager_ ini, yaitu ketika sedang menutup aplikasi yang saya gunakan. Ketika memberikan perintah _close_ pada aplikasi yang terbuka, sepertinya aplikasi tidak tertutup dengan benar.

Hal yang belum sempat saya atur adalah penggunaan _multi-monitor_, sebelumnya saya menggunakan monitor tambahan untuk meningkatkan produktivitas ketika harus membuka beberapa aplikasi secara bersamaan. Namun saya lupa menambahkan baris berikut pada berkas `.xsession` saya di **OpenBSD**

{% highlight bash %}
xrandr --newmode "1920x1080_75.00"  220.75  1920 2064 2264 2608  1080 1083 1088 1130 -hsync +vsync
xrandr --addmode VGA-1 "1920x1080_75.00"
{% endhighlight %}

Itu adalah pengaturan untuk monitor tambahan yang saya gunakan dengan menggunakan _output port_ VGA di laptop.

### Menjelajah Dunia Maya
Seperti biasa, peramban kesukaan saya adalah **Firefox** sehingga saya pun melakukan pemasangan dengan perintah 

{% highlight bash %}
$ sudo pkg_add firefox
{% endhighlight %}

Namun menggunakan **Firefox** di **OpenBSD** selama satu minggu terakhir terasa kurang nyaman. Beberapa kali tiba-tiba tertutup secara paksa, dan saya belum mengetahui apa penyebabnya. 

Satu hal yang perlu diketahui adalah, saya belum berhasil melakukan kompilasi aplikasi Telegram di _platform_ **OpenBSD** ini. Hal ini menyebabkan saya harus membuka Telegram melalui **webogram**.

Selain hal-hal diatas ada juga yang membuat saya kadang merasa harus kembali lagi menggunakan **Ubuntu**, berikut adalah beberapa hal yang membuat saya ingin kembali menggunakan **Ubuntu**

- Wifi  
  It's sucks men .. masa kaga bisa konek wifi dengan gampang, saya membuat `script` sederhana untuk terhubung dengan wifi kosan yang saya gunakan. Jika harus terhubung dengan wifi baru maka harus ubah lagi script tersebut (T__T).

- Development  
  Saat ini saya sedang belajar `rust` sebagai bahasa baru untuk meningkatkan kemampuan saya pribadi. Namun berdasarkan halaman [ini](https://forge.rust-lang.org/platform-support.html), **OpenBSD** belum sepenuhnya mendapat dukungan (T__T). Dan juga saya belum memasang IDE apapun, cuma `vim` sebagai _editor_ yang saya gunakan saat ini. 

Itu adalah pengalaman saya selama satu minggu ini menggunakan **OpenBSD** sebagai sistem operasi harian. Banyak hal yang hilang dari apa yang biasa saya dapatkan ketika mengunakan **Ubuntu**, dan meskipun seperti quote yang saya tuliskan di atas sepertinya petualangan bersama **OpenBSD** ini belum akan berakhir.