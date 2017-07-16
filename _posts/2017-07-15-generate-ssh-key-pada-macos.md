---
layout: post
title: "Generate SSH Key pada MacOS"
subtitle: "Menambah SSH Key pada Akun Github"
description: ""
category: MacOS
tags: [ssh, macos]
---
{% include JB/setup %}

Jadi saya ingin memiliki sebuah laptop baru yang bisa saya bawa kemana-mana, karena T430 ini sekarang sudah cukup nyaman saya gunakan sebagai pengganti desktop dan juga sebagai _procrastinator station_ bagi saya dirumah. Sebenarnya saya ingin mengambil satu Thinkpad X220 sebagai pengganti Thinkpad X201 saya yang memang sudah tak terselamatkan lagi (untuk X201 ini bangkainya masih ada, jika ada yang minat untuk pritilannya bisa kontak saya). Namun saya mendapat berita yang tidak disangka, seorang teman berniat melepas MacBookPro tahun 2015 miliknya dengan harga murah dan juga bisa dicicil. Namanya penggemar barang murah saya pun langsung mengiyakan tawaran teman tersebut, alhasil saat ini saya memiliki MacBookPro tahun 2015 sebagai _daily driver_.

Karena akan saya gunakan sebagai _mobile daily driver_, maka saya perlu melakukan beberapa _setup_ agar tidak mengganggu kegiatan saya sehari-hari. Salah satu yang akan saya lakukan adalah **mengatur ssh key** untuk bisa digunakan dengan akun github saya.

#### Melakukan Generate SSH Key
Pertama saya akan melakukan _generate_ SSH Key dengan menggunakan terminal pada MacOS, saya menggunakan terminal iTerm pada kesempatan kali ini. Untuk melakukannya ketik perintah berikut pada layar terminal 

```
$ ssh-keygen -t rsa
```

Ketika mengeksekusi perintah `ssh-keygen` maka akan menawarkan untuk penentuan lokasi penyimpanan `key` yang digenerate nantinya. Langsung saja tekan `return` untuk menyimpan pada lokasi _default_. Selanjutkan kamu akan diminta untuk menentukan _passphrase_, kamu bisa mengosongkannya tapi ini sangat tidak direkomendasikan.

Setelah konfirmasi _passphrase_ maka program tersebut akan melakukan generasi key, dan terminal kamu akan menampilkan 

```
Your identification has been saved in /Users/myname/.ssh/id_rsa.
Your public key has been saved in /Users/myname/.ssh/id_rsa.pub.
The key fingerprint is:
ae:89:72:0b:85:da:5a:f4:7c:1f:c2:43:fd:c6:44:38 myname@mymac.local
The key's randomart image is:
+--[ RSA 2048]----+
|                 |
|         .       |
|        E .      |
|   .   . o       |
|  o . . S .      |
| + + o . +       |
|. + o = o +      |
| o...o * o       |
|.  oo.o .        |
+-----------------+
```

Lokasi _private key_ kamu berada pada direktori `.ssh` pada akun yang kamu gunakan dengan nama `id_rsa`. 

> Peringatan: jangan pernah berbagi _private key_ kamu dengan orang lain

#### Menambah SSH Key pada Akun Github
Sedangkan untuk _public key_ kamu juga berada pada direktori `.ssh` dengan nama `id_rsa.pub`, isi dari berkas inilah yang akan kita tambahkan pada akun github nantinya. Sebelumnya kamu perlu menyalin isi dari berkas `id_rsa.pub` tersebut dengan menggunakan `pbcopy`

```
$ pbcopy < ~/.ssh/id_rsa.pub
```

Kemudian buka akun github kamu dan ikuti langkah berikut

1. Masuk ke bagian **Settings->SSH and GPG Keys**  
2. Tekan tombol **New SSH Key**  
3. Beri nama pada _field_ **Title** dengan nama yang mudah bagi kamu mengidentifikasi  
4. Paste SSH Key yang sudah kita salin tadi  
5. Selanjutnya tekan tombol **Add SSH Key**  

Dengan begitu kamu bisa melakukan `git clone` menggunakan protokol `ssh`. Sebagai informasi _post_ ini juga dibuat dari MacBookPro yang sudah disetup.
