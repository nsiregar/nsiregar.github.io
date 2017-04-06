---
layout: post
title: "Menggunakan Emoji pada Ubuntu 16.04"
subtitle: "Emoji dengan EmojiOne Picker"
description: "Memasang EmojiOne Picker pada Ubuntu 16.04 untuk Menggunakan Emoji"
category: Linux
tags: [emoji, emojione, linux]
---
{% include JB/setup %}

Pada zaman yang modern ini sudah sangat umum sekali untuk menggunakan emoji sebagai pengganti dari emoticon umumnya, hal ini pula yang mengganggu pikiran saya tentang bagaimana menulis karakter emoji pada Ubuntu 16.04 yang sedang saya gunakan. Setelah menjelajah ke berbagai sumber akhirnya saya menemukan sebuah _applet_ untuk Ubuntu yang dapat dengan mudah memenuhi keinginan hati ini. _Applet_ ini dikembangkan oleh [Jorge S. de Lis](https://twitter.com/gentakojima) yang bernama [EmojiOne Picker](https://github.com/gentakojima/emojione-picker-ubuntu).

Untuk menggunakan EmojiOne Picker ini terdapat tiga cara yaitu:

- Melakukan Kompilasi - _cukup ribet menurut saya_

- Menggunakan _Standalone Installer_ - _seharusnya bisa untuk semua distro_

- Menggunakan PPA - _ini yang cukup mudah menurut saya_

Untuk memasang EmojiOne Picker menggunakan PPA, buka Terminal (`CTRL + ALT + T`) dan ketik perintah berikut

    $ sudo add-apt-repository ppa:ys/emojione-picker && sudo apt update
    $ sudo apt install emojione-picker

Lalu jalankan _applet_ dengan mencari **EmojiOne** pada Unity Dash (lebih mudah menggunakan `ALT + F2` lalu ketik `emojione-picker`).
Berikut adalah tampilan EmojiOne Picker pada Ubuntu 16.04 yang saya gunakan

<img src="{{ site.url }}/img/emojione-picker.gif" class="img-responsive" alt="EmojiOne Picker">

Jika anda ingin mencoba menggunakan _standalone installer_, berikut adalah langkah yang harus ditempuh

1. _Clone_ repo ke direktori lokal anda dengan perintah `git clone https://github.com/gentakojima/emojione-picker-ubuntu`

2. Pindah ke direktori tersebut dengan `cd emojione-picker-ubuntu` dan _checkout_ pada rilis stabil terakhir dengan memeriksa rilis `git tag -l`. Contoh _checkout_ `git checkout v0.1`

3. Jalankan `./install.sh`, jika ingin membuangnya jalan `./install.sh` kembali

Silahkan mencoba ...