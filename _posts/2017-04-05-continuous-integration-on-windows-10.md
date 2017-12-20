---
layout: post
title: "Continuous Integration on Windows 10"
subtitle: "Instalasi Travis CI secara Lokal"
description: "Menggunakan Travis CI Secara Lokal pada Windows 10"
category: Windows
tags: [travis, continuous integration]
---
{% include JB/setup %}

Beberapa hari lalu saya membuat artikel [Firebase Project Deployment from Github](https://linhub.io/firebase/2017/04/03/firebase-project-deployment-from-github), pada artikel tersebut kita memanfaatkan layanan dari [Travis-CI](https://travis-ci.org) untuk proses _continuous integration_ pada repo yang berada di [Github](https://github.com). Lalu bagaimana jika kita ingin menjalankan Travis-Ci ini secara lokal? Dan perlu diingat bahwa saya masih menggunakan Windows 10.

<!--more-->
Karena masih menggunakan Windows 10 dan saya berniat mencoba instalasi Travis-CI secara lokal maka berikut adalah hal yang harus dipersiapkan

1. [Docker](https://docker.com)  
    Docker adalah sebuah platform containerization yang memudahkan pengembang dalam melakukan deployment perangkat lunak. Untuk menjalankan Travis-CI secara lokal saya mengunduh [Docker](https://www.docker.com/) Community Edition.

2. [Quay.IO](https://quay.io)  
    Menggunakan _image_ dari [quay.io](https://quay.io/organization/travisci), terdapat banyak pilihan _image_ dari quay.io di sini saya akan menggunakan bahasa node.js jalankan perintah berikut pada PowerShell
    ```
    PS D:\ngalim\blog> docker run -it quay.io/travisci/travis-node-js /bin/bash
    ```
    **PS: _image_ yang akan diunduh cukup besar, jika memakai layanan dengan kuota terbatas pastikan sudah siap secara lahir batin.**

    Setelah _image_ Travis-CI berhasil diunduh, silahkan berganti ke _user_ travis dengan
    ```
    su - travis
    ```

    <img src="{{ site.baseurl }}/img/travis-ci-local.png" class="img-responsive" alt="Travis CI">

3. Setelah Docker dan Travis-CI terpasang anda dapat melakukan  
    a. _Cloning_ repo dari Github  
        Dengan melakukan proses ini maka anda harus secara manual memasang _dependencies_ dan menjalankan perintah _build_ pada Travis-CI.

    b. Membuat berkas `.travis.yml`  
        Berkas ini menginstruksikan untuk melakukan _wrap_ pada proyek kita kemudian memerintahkan Travis-CI untuk mengunduh _image_ docker, kemudian menjalankannya.

Pada kesempatan berikutnya saya akan membahas bagaimana langkah-langkah melakukan _build_ dengan Travis-CI secara lokal.