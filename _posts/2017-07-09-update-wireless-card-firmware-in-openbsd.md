---
layout: post
title: "Update Wireless Card Firmware in OpenBSD"
subtitle: "Update Wireless Card secara Manual di OpenBSD"
description: ""
category: openbsd, firmware
tags: [openbsd, firmware, wireless]
---
{% include JB/setup %}

Beberapa saat yang lalu saya melakukan instalasi OpenBSD pada Thinkpad T430 kesayangan yang saya gunakan, kenapa OpenBSD? Sebenarnya tidak ada alasan spesifik, alasan kenapa saya mencoba OpenBSD lebih dikarenakan `racun` yang sering saya dapat ketika membaca subreddit OpenBSD. Kesan pertama ketika melakukan instalasi OpenBSD adalah `ini bukan sembarangan` kenapa? Karena memang memasang OpenBSD tidak semudah ketika saya memasang Ubuntu di laptop kesayangan ini.

Hal pertama yang cukup membuat saya tercengang adalah OpenBSD tidak memasang DE secara default, _it's all black screen and white text_. Dan yang cukup membuat saya kaget untuk kali kedua adalah karena ternyata _wireless card_ yang saya gunakan tidak terdeteksi di OpenBSD, dan ternyata membutuhkan _firmware update_.

Masalah _firmware update_ ini sebenarnya tidak akan merembet terlalu jauh jika saya memiliki koneksi dengan menggunakan kabel, _well_ saya juga tidak yakin akan hal ini karena belum tentu tidak membutuhkan _firmware update_.

Secara asali OpenBSD memiliki perangkat lunak `fw_update` untuk melakukan pembaruan pada _firmware_ yang membutuhkan, namun sungguh ironis karena perangkat lunak ini memerlukan koneksi internet, yang pada kasus yang saat itu saya hadapi, menggunakan _wireless card_.

Akhirnya saya melakukan pembaruan secara manual pada _wireless card_ yang saya gunakan dengan mengunduh firmware yang diperlukan pada laman [http://firmware.openbsd.org/firmware/6.1/](http://firmware.openbsd.org/firmware/6.1/).

> Sebagai catatan, kasus saya memerlukan `iwn firmware`, mungkin berbeda pada kasus yang mungkin akan kalian hadapi.

Saya mengunduh dua berkas `SHA256.sig` dan `iwn-firmware-5.11p1.tgz` serta meletakkan kedua berkas tersebut pada `removable media`. Kemudian saya melakukan pemasangan firmware dengan perintah

```
# mkdir /mnt/usbflash
# mount /dev/sd0i /mnt/usbflash
# cd /mnt/usbflash
# pkg_add iwn-firmware-5.11p1.tgz
```

_Well_ dengan cara tersebut akhirnya _wireless card_ saya bisa digunakan, berikutnya adalah bagaimana terhubung dengan _wifi_ dirumah.

Untuk terhubung dengan _wifi_ di rumah saya menggunakan perintah beriku:

```
# ifconfig iwn0 up
# ifconfig iwn0 scan
# ifconfig iwn0 nama_hotspot wpakey kata_sandi wpaprotos wpa1,wpa2
# dhclient iwn0
```

Perintah tersebut akan selalu kita gunakan ketika akan terhubung dengan _wifi_, saya juga mendapat informasi tentang penggunaan beberapa `script` untuk melakukan _reconnection_ secara otomatis namun belum mencoba.

Setelah terhubung dengan _wifi_ hal pertama yang saya lakukan adalah melakukan perintah berikut:

```
# fw_update
```

Untuk melakukan pembaruan _firmware_ yang lain secara otomatis.