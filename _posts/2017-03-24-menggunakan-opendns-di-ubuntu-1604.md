---
layout: post
title: "Menggunakan OpenDNS di Ubuntu 16.04"
subtitle: "Safer, Faster, and Smarter Internet"
description: "Menggunakan OpenDNS di Ubuntu 16.04"
category: Tips and Trick
tags: [dns, ubuntu, telkomsel, opendns]
---
{% include JB/setup %}

Beberapa saat lalu saya membaca artikel teman saya Ali mengenai penggunaan DNSCryt di [sini](https://situsali.com/mengakses-situs-terblokir-dengan-dnscrypt-di-arch-linux/), akhirnya saya penasaran ingin mencoba. Namun alih-alih ingin menggunakan DNSCrypt saya cuma ingin mengubah DNS bawaan dari Telkomsel ke OpenDNS, operator yang saya gunakan Telkomsel. Mulailah saya membaca petunjuk tentang bagaimana [menggunakan OpenDNS di Ubuntu](https://support.opendns.com/hc/en-us/articles/228007087-Ubuntu), namun sungguh tak dinyana dengan hanya mengikuti petunjuk tersebut tidak bisa mnegubah DNS Telkomsel menjadi DNS OpenDNS.

<img src="{{ site.baseurl }}/img/opendns-fail.png" class="img-responsive" alt="OpenDNS Fail">

Akhirnya saya pun berkonsultasi dengan beberapa teman di grup Telegram untuk memecahkan masalah ini, dan berikut kesimpulannya :

- Ubuntu menggunakan `dnsmasq` untuk mengatur DNS  
    Karena hal ini ketika menggunakan _custom_ DNS seperti OpenDNS, Ubuntu tidak dapat melakukan _resolve host_.  
- Berkas `/etc/resolv.conf` tidak dapat diubah permanen  
    Berkas `/etc/resolv.conf` pada Ubuntu 16.04 ternyata di _generate_ oleh *resolvconf*, hal ini mengakibatkan kita tidak bisa mengubah secara sembarang berkas tersebut.  
- Telkomsel melakukan `redirect` DNS untuk keperluan *Internet Sehat*  
    Ketika sudah melakukan penggantian DNS melalui `network-manager`, DNS akan tetap kembali ke DNS Telkomsel.

Untuk mengatasi masalah tersebut berikut beberapa hal yang perlu dilakukan :

1. Ubah berkas `/etc/dhcp/dhclient.conf` dan buang `#` pada baris  
    ```
    prepend domain-name-servers <ip_domain>;
    ```
    Ganti `<ip_domain>` dengan IP dari OpenDNS yaitu 208.67.222.222 dan 208.67.220.220, hal ini bermaksud agar IP OpenDNS digunakan sebagai _primary_ dan _secondary_ DNS.

2. Ubah berkas `/etc/dnsmasq.conf` dan tambahkan  
    ```
    server=208.67.222.222#5353
    server=208.67.220.220#5353
    ```
    Hal ini bermaksud untuk menggunakan IP OpenDNS dengan _custom port_, karena _port default_ 53 tidak bisa digunakan pada Telkomsel.

Dengan menggunakan cara tersebut maka saya berhasil menggunakan OpenDNS 

<img src="{{ site.baseurl }}/img/opendns-success.png" class="img-responsive" alt="OpenDNS Success">

