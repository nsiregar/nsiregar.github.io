---
layout: post
title: "Memperbaiki Typo Pada Terminal"
subtitle: ""
description: "memperbaiki typo pada terminal"
category: Shell
tags: [shell, typo]
---
{% include JB/setup %}

Hari ke-2 menjalani pengobatan malaria, badan saya masih suka panas dingin tidak tentu. Dalam sehari saya sudah berganti kaos lebih dari 5 kali, keringat yang muncul akibat obat yang diminum tidak terbendung. Sekarang kondisi agak sedikit baikan, saya sempatkan membuka laptop sebentar untuk tetap _ODOA_. Kali ini cuma mau berbagi trik sederhana ketika mengetik perintah pada _terminal_.

Jika kalian sudah membaca artikel [Trik Terminal pada Ubuntu 16.04](https://linhub.io/shell/2017/04/14/trik-terminal-pada-ubuntu-1604/), kemungkinan besar beberapa dari kalian akan menggunakan trik memindahkan kursor untuk memperbaiki _typo_ pada _command_ yang kalian jalankan. Selain dengan trik tersebut, untuk memperbaiki _command_ yang salah ketik kalian dapat menggunakan simbol `^`. Misal kalian salah mengetik perintah

    $ sudo apy update

Yang mana perintah tersebut tidak akan berhasil dijalankan karena salah. Kalian dapat memperbaikinya dengan simbol `^` menjadi 

    $ ^apy^apt

Maka secara otomatis perintah yang sebelumnya `sudo apy update` akan dirubah menjadi `sudo apt update`. Yang perlu diingat adalah kalian harus menulis perintah yang salah dengan perintah yang tepat ketika menggunakan simbol `^`. Mungkin sampai disini saja, saya masih harus minum obat malaria lagi. Mbleewwww .....
