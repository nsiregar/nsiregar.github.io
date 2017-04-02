---
layout: post
title: "Firebase Project Deployment from Github"
subtitle: "Menggunakan Travis CI untuk Deploy Firebase Project"
description: ""
category: Firebase
tags: [firebase, travis, continuous integration]
---
{% include JB/setup %}

Jadi beberapa saat yang lalu lagi maen-maen sama anak-anak Pegelinux, karena dapat domain gratisan dari [Freenom](https://freenom.com) dengan akhiran `.ga`, `.ml`, dan `.tk`. Yang paling asik adalah domain dengan akhiran `.ga`, karena bisa dibuat bermacam-macam seperti domain `pernah.ditinggalpaslagisayangsayangnya.ga` yang di redirect ke domain teman. Dari sinilah muncul ide bagaimana jika saya membuat sebuah halaman statis yang di host di Google Firebase dengan domain `.ga`. Saya pun mendaftarkan beberapa domain `.ga` untuk persiapan nantinya.

Untuk proyek ini saya ingin repo berada di github, namun deployment ke Google Firebase. Karena keperluan tersebut saya menggunakan [Travis-CI](https://travis-ci.org) untuk melakukan deployment ke Google Firebase. Langkah yang saya lakukan adalah

### Membuat repo project di github dan Firebase project
Karena ini adalah project baru maka saya membuat sebuah repo baru dengan nama `baca.situsali.ga` pada akun github saya, project keseluruhan dapat dilihat di [sini](https://github.com/nsiregar/baca.situsali.ga). Selain membuat repo saya juga membuat firebase project melalui [firebase console](https://console.firebase.google.com/).

### Clone repo ke lokal dan melakukan `firebase init` untuk inisialisasi project Firebase
Untuk mengisi project dengan berkas yang kita perlukan saya melakukan _clone_ pada repo dengan perintah

    C:\project> git clone https://github.com/nsiregar/baca.situsali.ga.git

Kemudian melakukan `firebase init` pada direktori proyek

    C:\project> cd .\baca.situsali.ga\
    C:\project\baca.situsali.ga> firebase init

Ketika inisiasi maka akan ditanyakan proyek akan disambungkan dengan firebase project yang mana, pilih yang kita buat pada langkah awal. Pada project ini saya hanya membuat dua buah berkas `index.html` dan juga `style.css`, kedua berkas ini berada pada folder `public`. Lakukan _commit_ setelah inisialisasi proyek.

### Menambahkan `.travis.yml` pada repo
Untuk dapat melakukan deployment dari Github ke Google Firebase, hal yang perlu kita ketahui adalah

1. Firebase menggunakan perintah `firebase deploy` untuk deployment langsung dari komputer yang kita gunakan, namun perintah `firebase deploy` memiliki argument `--token`. Dengan argument ini maka kita bisa menjalankan deploy dengan perintah

    `firebase deploy --token $FIREBASE_TOKEN`

2. Bagaimana mendapatkan token untuk Google Firebase? Untuk mendapatkan token dapat dilakukan dengan perintah `firebase login:ci`. Perintah ini akan menghasilkan token firebase yang kita perlukan

3. Integrasikan project Github kita dengan Travis-CI

Setelah mengetahui tiga hal tersebut maka kita bisa membuat _Environment Variable_ pada halaman _Settings_ di Travis-CI repo yang kita integrasikan. Buat _variable_ dengan nama `FIREBASE_TOKEN` dan isi dengan token yang digenerate oleh perintah `firebase login:ci`, penting **Jangan nyalakan `Display value in build log`** untuk keamanan.

<img src="{{ site.baseurl }}/img/firebase-env.png" class="img-responsive" alt="Environment Variables">

Setelah mendefinisikan _environment variables_ kita akan membuat berkas `.travis.yml` pada repo kita, berikut adalah contoh `.travis.yml` yang saya gunakan.

    language: node_js
    node_js:
    - "7.8.0"
    script:
    - echo "Deploying Process"
    install:
    - npm install -g firebase-tools
    after_success:
    - firebase deploy --token $FIREBASE_TOKEN

Yang perlu diperhatikan adalah `after_success`, ini adalah dimana kita akan melakukan deploy dari github ke Google Firebase setelah semua _command_ sebelumnya berhasil dijalankan. Lakukan _commit_ setelah membuat berkas `.travis.yml`.

### Test Deployment
Untuk melakukan test deployment silahkan lakukan perintah

    C:\project\baca.situsali.ga> git push

Setelah selesai maka pada _Job Log_ pada Travis CI akan menampilkan

<img src="{{ site.baseurl }}/img/firebase-deploy.png" class="img-responsive" alt="Firebase Deploy">

Dengan begitu Google Firebase sudah menjalankan hosting untuk static files kita.

### Menambahkan Custom Domain
Agar dapat dibuka melalui [`baca.situsali.ga`](https://baca.situsali.ga), maka perlu menambahkan custom domain pada proyek firebase kita. Untuk lebih lengkap tentang menambah custom domain ini silahkan baca artikel [berikut](https://firebase.google.com/docs/hosting/custom-domain). Kelebihan dari Google Firebase adalah kita mendapat SSL Free ketika menggunakan custom domain.

Buat bang [Ali](https://situsali.com), terimakasih sudah diberi kesempatan untuk domain [https://baca.situsali.ga/](https://baca.situsali.ga/).