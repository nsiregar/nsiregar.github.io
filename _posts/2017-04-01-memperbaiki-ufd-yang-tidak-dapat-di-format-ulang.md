---
layout: post
title: "Memperbaiki UFD yang Tidak Dapat Di Format Ulang"
subtitle: "UFD dengan galat 'The system cannot find the file specified'"
description: "Memperbaiki UFD dengan galat 'The system cannot find the file specified'"
category: Windows
tags: [diskpart, ufd, windows]
---
{% include JB/setup %}

Beberapa saat yang lalu laptop kesayangan saya sedang mengalami masalah, sehingga saya melakukan pemasangan Windows 10 pada Thinkpad yang saya gunakan. Dengan berbekal Windows 10 saya mulai mengunduh beberapa berkas `.iso` linux untuk dapat memperbaiki laptop. Ketika menggunakan [UnetBootin](https://unetbootin.github.io/) untuk membuat media instalasi dengan USB terjadi kegagalan, hal ini menyebabkan UFD yang saya gunakan tidak dapat terbaca pada sistem operasi Windows 10. 

Akhirnya saya membuka `Computer Management -> Storage -> Disk Management` untuk melakukan format UFD yang saya gunakan, namun ketika melakukan aksi untuk 

1. Mengubah `Drive Letter and Path`

2. Melakukan `Format`

Windows menampilkan pesan **The system cannot find the file specified**. Hal ini cukup merisaukan saya, agar mempercepat proses saya mencoba melakukan _format_ dengan HP Formatter Utility. Namun hal ini juga tidak dapat memberikan hasil yang diharapkan. 

Setelah beberapa saat dibingungkan oleh masalah ini saya teringat akan _utility_ bawaan dari Windows sendiri yaitu `DISKPART`. `DISKPART` sendiri merupakan _utility_ dari Windows untuk operasi berkaitan dengan disk yang kita gunakan, bisa dibilang _Disk Management_ versi _console_. Untuk membuka `DISKPART` dapat dilakukan dengan

    C:\Users\ngalim>diskpart

Perintah diatas akan menampilkan dialog konfirmasi untuk penggunaan `DISKPART` pada level administrator, program ini memerlukan akses administrator untuk dapat berjalan. Kemudian tampilkan daftar disk yang ada pada sistem anda dengan 

    DISKPART> LIST DISK

    Disk ###  Status         Size     Free     Dyn  Gpt
    --------  -------------  -------  -------  ---  ---
    Disk 0    Online           53 GB      0 B
    Disk 1    Online           14 GB      0 B
    Disk 2    Online           31 GB      0 B    

Karena UFD yang bermasalah adalah `Disk 1` maka saya akan memilihnya dengan

    DISKPART> SELECT DISK 1

    Disk 1 is now the selected disk.

Setelah itu ketik perintah 

    DISKPART> CLEAN

Perintah tersebut akan menghapus semua partisi dan volume dari disk yang kita pilih. Setelah itu buka kembali `Computer Management -> Storage -> Disk Management`, maka UFD yang dimaksud akan ditampilkan sebagai `EMPTY`. Dengan ini kita dapat melakukan operasi untuk membuat partisi dan _format_ ulang UFD.

Btw saya masih bimbang untuk menggunakan Debian atau Ubuntu ... Ah Sudahlah ...
