---
layout: post
title: "Memasang RStudio di Ubuntu 16.04"
description: "Memasang RStudio di Ubuntu"
category: r
tags: [r, rstudio]
---
{% include JB/setup %}

Beberapa saat lalu saat mulai belajar tentang [R](https://www.r-project.org/about.html) saya mengenal tentang [RStudio](https://www.rstudio.com/) yang merupakan sebuah IDE untuk 
[R](https://www.r-project.org/about.html). Dari halaman [unduh](https://www.rstudio.com/products/rstudio/) ada dua jenis RStudio yaitu:  
- RStudio Desktop, dimana program dijalankan secara lokal sebagai aplikasi destop pada umumnya  
- RStudio Server, dimana penggunaan RStudio diizinkan melalui peramban web  

Disini saya menggunakan [RStudio Desktop 64-bit](https://download1.rstudio.org/rstudio-1.0.136-amd64.deb) berikut adalah proses instalasi RStudio di Ubuntu 16.04.  

## Memasang R-Base  
> ini opsional jika belum memasang R  

Sunting berkas `/etc/apt/sources.list` untuk menambahkan repo R dengan perintah  
`$ sudo echo "deb http://cran.rstudio.com/bin/linux/ubuntu xenial/" | sudo tee -a /etc/apt/sources.list`  

Kemudian lanjutkan dengan menambahkan _keyring_ R ke Ubuntu dengan perintah  
`$ gpg --keyserver keyserver.ubuntu.com --recv-key E084DAB9`  
`$ gpg -a --export E084DAB9 | sudo apt-key add -`  

Dan seperti biasa lanjutkan dengan perintah `apt`  
`$ sudo apt update`  
`$ sudo apt install r-base r-base-dev`  

## Memasang RStudio
Lanjutkan dengan memasang berkas `.deb` RStudio dengan perintah  
`$ wget https://download1.rstudio.org/rstudio-1.0.136-amd64.deb`  
`$ sudo dpkg -i rstudio-1.0.136-amd64.deb`  

Berikut adalah tampilan RStudio di Ubuntu 16.04 saya  
[![RStudio]({{ site.baseurl }}/img/rstudio-ubuntu.png)]({{ site.baseurl }}/img/rstudio-ubuntu.png)