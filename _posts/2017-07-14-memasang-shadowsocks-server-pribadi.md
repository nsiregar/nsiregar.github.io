---
layout: post
title: "Memasang Shadowsocks Server Pribadi"
subtitle: "Lindungi Privasimu"
description: ""
category: Internet
tags: [shadowsocks, internet]
---
{% include JB/setup %}

Baru beberapa saat tadi tersebar berita bahwasanya [Telegram](https://telegram.org) mulai diblokir oleh Pemerintah Indonesia. Hal ini menyebabkan berinternet di Indonesia semakin kurang menyenangkan, ditambah dengan penyedia layanan yang memang [menolak internet netral](https://internetnetral.org) di Indonesia. Ditambah lagi dengan praktek menjijikkan dari beberapa provider yang memang melakukan _intrusive content modifying_ secara terang-terangan. Mungkin beberapa dari kamu sudah mengerti tentang bagaimana menghindari praktek semacam ini dengan menggunakan `vpn` atau `ssh proxp`, kesempatan kali ini saya ingin menulis tentang menggunakan `shadowsocks` untuk menjaga privasi kamu ketika sedang online.

#### Antara Shadowsocks dan VPN
Seperti yang (mungkin) sudah kita ketahui bersama, kita bisa menggunakan `vpn` untuk melakukan _bypass_ pada _firewall_ dan melindungi privasi selama berselancar di dunia maya. Namun dengan menggunakan `vpn` bisa dikatakan akan memperlambat kecepatan internet kita, kenapa? Karena dengan menggunakan `vpn` semua _traffic_ internet kita akan diarahkan ke server `vpn` yang kemungkinan besar ada di luar negeri.

Atas dasar inilah saya menyarankan untuk menggunakan `shadowsocks`, karena dengan `shadowsocks` kita bisa mengatur aplikasi apa saja yang diarahkan dengan `shadowsocks`.

#### Memasang Shadowsocks di VPS
Jadi ceritanya saya punya VPS di Digital Ocean (Ubuntu 16.04) yang memang saya gunakan untuk kebutuhan _proxying_, hal ini karena agak `serem` jika menggunakan _proxy_ yang bukan milik sendiri. Di VPS ini saya sudah memasang `SSH Endpoint`, `Squid Proxy` dan beberapa tambahan lain. Untuk memasang tambahan `Shadowsocks` sebenarnya tidak terlalu rumit, pertama yang diperlukan adalah `python pip` untuk memasang `shadowsocks` dan `m2crypto`.

```
$ sudo apt install python-pip python-m2crypto
$ sudo pip install shadowsocks
```

Kemudian buat berkas konfigurasi

```
$ sudo vi /etc/shadowsocks.json
```

Masukkan konfigurasi berikut pada berkas tersebut

```
{
    "server":"ip dari server",
    "server_port":8388,
    "local_port":1080,
    "password":"kata sandi!",
    "timeout":600,
    "method":"chacha20-ietf-poly1305"
}
```

Untuk lebih jelas mengenai konfigurasi ini kamu bisa melihat di [sini](https://shadowsocks.org/en/config/quick-guide.html). Kemudian jalankan `shadowsocks` dengan perintah

```
$ sudo ssserver -c /etc/shadowsocks.json -d start
```

Jika diperlukan mungkin kamu perlu menjalankan perintah berikut untuk membuka akses `shadowsocks` dari `iptables`

```
$ sudo iptables -I INPUT -p tcp --dport 8000 -j ACCEPT
```

Jika menginginkan agar server `shadowsocks` berjalan otomatis setelah _restart_, tambahkan baris berikut pada berkas `/etc/rc.local`

```
/usr/bin/python /usr/local/bin/ssserver -c /etc/shadowsocks.json -d start
```

#### Memasang Shadowsocks pada Android
Untuk memasang _client_ di Android silahkan unduh di [sini](https://play.google.com/store/apps/details?id=com.github.shadowsocks)

#### Optimasi Shadowsocks
_well_ ini sih memang bisa dibilang tergantung pada beberapa hal antara lain **lokasi vps** dan **kecepatan provider**. Untuk _droplet_ saya sendiri berada di Singapore, sehingga bisa dikatakan cukup lumayan untuk kebutuhan sehari-hari.

Dengan cara ini saya melakukan _bypass_ internet pada aplikasi **reddit** dan beberapa lainnya di _smartphone_ yang saya gunakan, jika nanti memang **Telegram** diblok oleh pemerintah Indonesia setidaknya sudah ada jalan lain yang bisa dicoba.
