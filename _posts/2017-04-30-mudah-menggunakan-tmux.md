---
layout: post
title: "Mudah Menggunakan TMUX"
subtitle: "Berkenalan dengan tmux"
description: "Mudah menggunakan tmux"
category: Shell
tags: [tmux, shell]
---
{% include JB/setup %}

Semalam ketika saya sedang belajar mengenai pair programming, saya berkenalan dengan `tmux` _teminal multiplexer_. `tmux` ini berguna untuk melakukan _pair programming_ secara _remote_, disini karena say amsih baru dengan `tmux` saya hanya ingin bebagi tentang `tmux` saja belum ke _pair programming_ karena jadwal sore ini ternyata ditunda.

<!--more-->
### Memasang `tmux`
untuk memasang `tmux` pada Ubuntu 16.04 cukup dilakukan dengan perintah

    $ sudo apt install tmux

maka secara langsung program `tmux` akan terpasang pada sistem anda. Anda dapt menjalankan dengan perintah `tmux` dari shell yang dijalankan.

### Pintasan
Ketika pertama kali menggunakan `tmux` ini hal menurut saya cukup menarik adalah kita dapat membuat beberapa _pane_ dalam sebuah _terminal_, berikut adalah beberapa pintasan yang saya pelajari ketika menggunakan `tmux`. Pintasan pada `tmux` menggunakan kombinasi tombol `CTRL + b` kemudian dilanjutkan dengan tombol pintasan.

1. `CTRL + b` - `"` - Split panel secara horizontal
2. `CTRL + b` - `%` - Split panel secara vertikal
3. `CTRL + b` - `ARROW` - Berpindah antar panel
4. `CTRL + b` - `PgUp`/`PgDown` - Mode _scrolling_
5. `CTRL + b` - `[` - Mode salin, dengan mode ini maka kita dapat menyalin dengan menggerakkan kursor menggunakan `PgUp`/`PgDown` untuk mengakhiri cukup tekan `q`

Itu adalah beberapa hal yang saya pelajari ketika menggunakan `tmux` untuk pertama kali. Masih panjang jalan menuju Roma ....