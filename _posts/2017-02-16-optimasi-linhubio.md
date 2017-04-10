---
layout: post
title: "Optimasi Linhub.IO"
subtitle: ""
description: "Think With Google Optimization"
category: 
tags: [css, google, optimization]
---
{% include JB/setup %}  
Jadi beberapa hari lalu saya membaca artikel teman mengenai Think With Google [di sini](https://www.afternewbie.com/analisa-kecepatan-website-anda-menggunakan-think-google/), _ngehe_ -nya 
ternyata [Linhub](https://linhub.io) masih sangat jauh dari kata _responsive_ berikut adalah skor menurut [Think With Google](https://testmysite.thinkwithgoogle.com/)  

<img src="{{ site.baseurl }}/img/thinkwithgoogle-linhub.png" class="img-responsive" alt="linhub sebelum optimasi">  

Kemudian saya penasaran apakah situs teman-teman saya yang lain juga memiliki skor yang tinggi, alhasil saya mencoba beberapa situs milik teman  

### [Situs KabayanKababayan](https://rizaumami.github.io)  
Situs ini cukup mengedjoetkan saya karena disamping tampilan yang adem, gaya bahasa yang asik ternyata memiliki skor cukup tinggi  

<img src="{{ site.baseurl }}/img/rizaumami.png" class="img-responsive" alt="situs mimin">  

### [AfterNewbie](https://afternewbie.com)  
Situs ini juga memiliki nilai yang cukup tinggi untuk _Mobile Friendliness_  

<img src="{{ site.baseurl }}/img/afternewbie.png" class="img-responsive" alt="situs ari">  

### [SitusAli](https://situsali.com)  
Ini yang membuat saya lebih ter _kedjoet_ ternyata ga setinggi yang saya duga  

<img src="{{ site.baseurl }}/img/situsali.png" class="img-responsive" alt="situs ali">  

Dengan misi ingin meningkatkan skor, akhirnya saya berkonsultasi kepada pemilik [situs setwebhook](https://setwebhook.ga) yang memiliki nilai sempurna  

<img src="{{ site.baseurl }}/img/setwebhook.png" class="img-responsive" alt="radyakaze">  

Walhasil saya dapat bantuan yang cukup membantu seperti  

- Melakukan _minification_ untuk berkas css/js  
- Melakukan mode _asynchronous_ untuk berkas js  
- Menurunkan ukuran berkas css/js  

Dan berikut adalah hasil dari optimasi yang dilakukan  

<img src="{{ site.baseurl }}/img/linhub-optimized.png" class="img-responsive" alt="linhub sesudah optimasi">  

Memang belum mencapai nilai sempurna, tapi sudah lebih baik dari nilai sebelumnya.