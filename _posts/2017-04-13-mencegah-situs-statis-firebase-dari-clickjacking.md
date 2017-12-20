---
layout: post
title: "Mencegah Situs Statis Firebase dari Clickjacking"
subtitle: "Firebase Config"
description: "Menggunakan firebase hosting option untuk mencegah clickjacking"
category: Web
tags: [clickjacking, firebase, config]
---
{% include JB/setup %}

Ketika sedang jalan-jalan di situs [Om Ali](https://situsali.com/) saya membaca artikel menarik tentang _clickjacking_, dimana ternyata kasus tersebut juga menimpa sobat kita dari [Kabar Linux](https://kabarlinux.web.id). Dengan rasa penasaran saya mencoba beberapa situs teman melalui [alat ini](http://online.attacker-site.com/html5/ClickjackingTester/), dan alangkah _terkedjoetnya_ saya ketika melihat hasil berikut

<!--more-->
## [Blog Pak Haji Mimin](https://rizaumami.github.io/)

<img src="{{ site.baseurl }}/img/mimin-clickjacking.png" class="img-responsive" alt="Uwaaaaaa ">

## [Blog Om Sucipto](https://sucipto.net/)

<img src="{{ site.baseurl }}/img/sucipto-clickjacking.png" class="img-responsive" alt="Uwaaaaaa ">

## [Blog Bang Rezha](https://rezhajulio.id/)

<img src="{{ site.baseurl }}/img/rezha-clickjacking.png" class="img-responsive" alt="Uwaaaaaa ">

## [Blog Seorang Intel](https://nsetyo.id/)

<img src="{{ site.baseurl }}/img/sty-clickjacking.png" class="img-responsive" alt="Uwaaaaaa ">

Berdasarkan hasil diatas, blog teman-teman saya malah pada kena _clickjacking_. Untuk mencegah hal ini terjadi pada [linhub](https://linhub.io/), saya menambahkan beberapa konfigurasi tambahan pada berkas `firebase.json` sebagai berikut

{% raw %}
    {
    "hosting": {
        "public": "_site",
        "ignore": [],
        "rewrites": [],
        "headers": [ {{
        "source" : "**",
        "headers" : [ {
            "key" : "X-Frame-Options",
            "value" : "SAMEORIGIN"
        } ]
        }, {
        "source" : "**",
        "headers" : [ {
            "key" : "X-Content-Type-Options",
            "value" : "nosniff"
        } ]
        }, {
        "source" : "**",
        "headers" : [ {
            "key" : "X-XSS-Protection",
            "value" : "1"
        } ]
        } ]
    }
    }
{% endraw %}

Dengan begitu akan melindungi situs yang di _hosting_ pada Firebase akan terlindungi dari serangan _clickjacking_, _xss_, dan juga _mime sniffing_. Buat teman-teman yang situsnya masih bisa kena _clickjacking_ mungkin bisa segera anuin biar anu ...