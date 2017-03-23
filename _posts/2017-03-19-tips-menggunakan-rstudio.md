---
layout: post
title: "Tips Menggunakan RStudio"
subtitle: ""
description: "Tips Menggunakan RStudio"
category: R
tags: [r, rstudio, tips]
---
{% include JB/setup %}

Setelah menggunakan RStudio selama mempelajari R, ada beberapa tips untuk mempermudah kita menggunakannya.

#### Menampilkan data view pada jendela baru
Fitur ini terletak pada panel data view, dengan fitur ini akan sedikit merepotkan karena data view akan menjadi terpisah dengan `window` utama. Namun fitur ini cukup berguna jika menggunakan layar multiple.


#### Menggunakan Panel History
Jadi, panel ini menampilkan daftar perintah yang pernah kita jalankan dengan bantuan panel ini kita bisa melakukan `copy ` dan `paste` kedalam panel editor. Memudahkan membuat _script_ tanpa harus melakukan `copy` dari _console_.


#### Menggunakan Command History
Selain panel history ada juga command history, command history ini dapat dilakukan dengan `CTRL + ↑`. Ini akan menampilkan perintah yang pernah kita jalankan di dalam _console_, perintah yang ditampilkan akan di filter sesuai dengan apa yang kita ketik.


#### Menggunakan Code Snippet
Ini merupakan _shortcut_ ketika kita akan menuliskan kode di dalam RStudio. Dengan menggunakan `TAB` dan juga keyword untuk sebuah fungsi maka akan memasukkan struktur umum dari fungsi tersebut. Misal jika mengetik `fun` kemudian dilanjutkan dengan menekan tombol `TAB` maka akan menampilkan struktur umumnya, gunakan `TAB` kembali untuk merubah sisa dari struktur. Di dalam RStudio juga memungkinkan kita untuk membuat _code snippet_ sendiri.


#### Melakukan Navigasi Berkas
Di dalam R memiliki fitur _tab completion_, fitur ini juga dapat digunakan untuk melakukan navigasi berkas sebagaimana yang biasa dilakukan di dalam terminal. Untuk melakukannya cukup mudah hanya tekan `TAB` ketika mengetik diantara tanda kuot `("")` untuk membuka _explorer_.


#### Menggunakan Pintasan Papan Ketik
Umumnya pengguna RStudio akan menggunakan metode _point-and-click_ untuk menjalankan perintah yang berada di dalam IDE tersebut, misal untuk membuat berkas baru maka pengguna akan melakukan _click_ sesuai urutan berikut `Toolbar RStudio -> File -> New File -> R Script`. Namun RStudio menyediakan fitur untuk menggunakan pintasan melalui keyboard.

- Menggunakan Pintasan Sendiri
    Untuk menampilkan daftar _keybinding_ dan juga membuat _keybinding_ sendiri gunakan `Tools -> Modify Keyboard Shortcuts`.

- Menambahkan Operator Assignment
    Gunakan `ALT + -` untuk menambahkan operator assignment (`<-`).

- Menambahkan Operator Pipe
    Gunakan `CTRL + SHIFT + M` untuk menambahkan operator pipe (`%>%`).

- Navigasi Potongan Kode
    Untuk melakukan navigasi antar potongan kode gunakan `ALT + CTRL + UP` atau `ALT + CTRL + DOWN`.