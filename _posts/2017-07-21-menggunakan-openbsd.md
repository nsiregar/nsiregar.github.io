---
layout: post
title: "Menggunakan OpenBSD"
subtitle: "OpenBSD Sebagai Sistem Operasi Keseharian"
description: ""
category: OpenBSD
tags: [openbsd, bsd]
---
{% include JB/setup %}

Setelah beberapa hari lalu saya berhasil melakukan update _firmware_ pada OpenBSD di Thinkpad kesayangan saya, kali ini saya berencana untuk menggunakan OpenBSD sebagai sistem operasi _default_ saya dalam kegiatan sehari-hari. Alasan kenapa saya ingin menggunakan OpenBSD sebagai sistem operasi sehari-hari tidak lain dan tidak bukan adalah karena saya sedang meneliti seberapa _greget_ sistem operasi ini dibandingkan dengan sistem operasi GNU/Linux yang biasa saya gunakan. Beberapa _thread_ yang membahas mengenai penggunaan OpenBSD menyebutkan bahwa sistem operasi ini memiliki banyak kelebihan.

<!--more-->
#### Memasang OpenBSD Menggantikan Ubuntu
Seperti yang sudah saya tulis sebelumnya saya telah melakukan instalasi OpenBSD pada Thinkpad kesayangan, namun jika sebelumnya saya masih memasang Ubuntu sebagai alternatif maka kali ini saya hanya memasang OpenBSD sebagai sistem operasi saya. Perlu dicatat, pada pengalaman kali ini saya menggunakan hanya satu partisi yang di _mount_ pada /. Untuk melakukan hal ini ketika _installer_ OpenBSD memberikan pertanyaan terkait pemilihan penggunaan _disk_ saya memilih opsi `C` untuk konfigurasi kustom. Detail dari langkah yang saya lakukan dapat dilihat pada keluaran berikut

```
Use (A)uto layout, (E)dit auto layout, or create (C)ustom layout? [a] C

You will now create an OpenBSD disklabel inside the OpenBSD MBR partition.
The disklabel defines how OpenBSD splits up the MBR partition into OpenBSD partition
in which filesystem and swap space are created. 
You must provide each filesystem's mountpoint in this program.

The offset used in the disklabel are ABSOLUTE, i.e. relative to the
start of the disk, NOT the start of the OpenBSD MBR partition.

Label editor (enter '?' for help at any prompt)
> p
OpenBSD area: 64-4193280; size: 4193216; free 4193216
#                size           offset  fstype  [fsize  bsize  cpg]
  c:          4194304                0  unused 
> a
partition: [a] b
offset: [64]
size: [4193216] 256M
Rounding to cylinder: 532160
FS type: [swap]
> a
partition: [a]
offset: [532224]
size: [3661056]
FS type: [4.2BSD]
mount point: [none] /
> w
> q
```

Seperti yang terlihat pada keluaran di atas, saya menambahkan `b` dengan _offset default_ [64] sebesar 250 mega dengan _filesystem swap_. Kemudian untuk label `a` saya menggunakan sisa _offset_ dan membiarkan _installer_ menentukan _offset_ terakhir secara otomatis. Kemudian saya melanjutkan instalasi OpenBSD seperti biasanya.


#### Mengubah `/etc/installurl` ke Mirror Lokal
Untuk mempercepat proses pemasangan paket, maka saya memilih untuk menggunakan _mirror_ OpenBSD lokal. Hal ini saya lakukan dengan menggunakan perintah  `echo` sebagai berikut

```
# echo "http://kartolo.sby.datautama.net.id/pub/OpenBSD/" >> /etc/installurl
```

Dengan begitu perintah `pkg_add` akan menambahkan versi dan arsitektur mesin pada direktori URL.


#### Mengganti Shell dengan Bash
Saya cukup betah dengan menggunakan _shell_ bash pada Ubuntu sebelumnya, untuk itu saya ingin menggunakannya kembali pada OpenBSD ini. Untuk mengganti _shell_ dengan bash gunakan perintah berikut

```
# pkg_add bash
# chsh -s /usr/local/bin/bash
```

Jika kamu ingin mengganti _shell_ pada _user_ lain, maka gunakan perintah

```
# chsh -s /usr/local/bin/bash nama_user
```

Itu adalah beberapa hal yang baru saya lakukan pada instalasi OpenBSD ini, masih banyak yang harus dilakukan untuk bisa digunakan sebagai sistem operasi harian seperti

1. Memasang _window manager_    
2. Memasang peramban untuk keperluan menjelajah dunia maya  
3. Memasang IDE untuk keperluan sehari-hari  
4. Serta melakukan kompilasi Telegram pada sistem operasi ini  

Semoga semua itu bisa saya lakukan dalam beberapa hari kedepan .. Semangat!!