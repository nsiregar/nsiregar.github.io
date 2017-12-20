---
layout: post
title: "Lebih Produktif dengan Tab Expansion"
subtitle: "Tab Expansion pada Windows dan Linux"
description: "Menggunakan tab expansion pada sistem operasi windows dan linux"
category: Bash
tags: [bash, command prompt, shell, ]
---
{% include JB/setup %}

Beberapa saat lalu saya membaca artikel dari Pak Haji Mimin mengenai _Bash Brace Expansion_ di [sini](https://rizaumami.github.io/2017/03/04/bash-brace-expansion/), dan juga artikel yang mirip pada blog Bang Sty di [sini](https://nsetyo.id/post/terminal-tips-01-membuat-banyak-files-dengan-nama-serupa/). Kata _expansion_ pada artikel tersebut mengingatkan saya mengenai _tab expansion_ pada _shell_ interaktif _Bash_ dan juga _Command Prompt Windows_, ini adalah fitur yang cukup bagus karena dapat menghemat waktu ketika akan mengetik perintah pada _shell_.

<!--more-->
_Tab Expansion_ sendiri adalah sebuah fitur _autocomplete_ pada _shell_ interaktif modern, tanpa adanya _tab expansion_ maka mengetik perintah pada _shell_ akan memperlambat dan juga rawan galat ketika perintah cukup panjang. Perintah seperti `cd nama_folder_yang_cukup_panjang_untuk_diketik`, cukup dilakukan dengan `cd na[TAB]`, jika hanya ada satu direktori yang berawalan `na` maka _tab expansion_ akan mengisi sisa nama direktori tersebut.

Namun ada sedikit perbedaan antara _tab expansion_ pada _Command Prompt Windows_ dengan _Bash_, jika menggunakan _Bash_ ketika menekan `[TAB]` dan ada beberapa kandidat yang memiliki awalan `na` maka _Bash_ akan menampilkan daftar berkas yang sesuai, kemudian kita bisa menambahkan karakter untuk kemudian menekan `[TAB]` maka _tab expansion_ akan melakukan tugasnya.

<img src="{{ site.baseurl }}/img/tab-expansion-1.png" class="img-responsive" alt="ls command">

Pada gambar diatas, bila kita ingin mengetik `ls -l fail2ban.log.4.gz` menggunakan _tab expansion_ maka ada 2 langkah mudah untuk dilakukan

- Ketik `ls -l fa[TAB]` maka akan otomatis akan melengkapi menjadi `ls -l fail2ban.log`

- Berikutnya ketik `4[TAB]` untuk memilih berkas `fail2ban.log.4` dan _tab expansion_ akan melengkapi `.gz`

Fitur tersebut memberikan keuntungan antara lain:

- Memperpendek pengetikan  
    Bayangkan jika harus mengetik `ls -l fail2ban.log.4.gz` dengan total 23 _keystroke_, dengan _tab expansion_ hanya perlu 9 _keystroke_ dengan 2 kali `[TAB]`

- Mengurangi Kesalahan  
    _Tab Expansion_ membantu mengurangi kesalahan ketika harus mengetik nama direktori atau berkas yang cukup panjang

- Sebagai Pemeriksa Kesalahan  
    Jika _tab expansion_ tidak _expand_ ada kemungkinan kesalahan pada awalan yang digunakan

Hal lain yang perlu diingat pada _shell_ interaktif seperti _Bash_ dan _Command Prompt Windows_, mereka memiliki _command history_, namun pada _Bash_ lebih mendukung lingkungan interaktif untuk menyimpan, mengubah, dan mencari perintah yang pernah kita gunakan. _Command History_ dapat digunakan dengan menggunakan `[UP Arrow]` dan `[DOWN Arrow]` pada _shell_ interaktif.

Gunakan fitur-fitur tersebut untuk mengurangi kesalahan dan juga menghemat waktu ketika mengetik perintah _shell_ !!
