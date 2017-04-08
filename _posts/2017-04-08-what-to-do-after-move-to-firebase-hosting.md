---
layout: post
title: "What To Do After Move to Firebase Hosting"
subtitle: "Mengatur Firebase untuk Lebih Baik"
description: "Mengatur Firebase Hosting untuk Layanan yang lebih baik"
category: Firebase
tags: [firebase, jekyll, web]
---
{% include JB/setup %}

Akhirnya semalam pindahan [linhub](https://linhub.io/) untuk menggunakan hosting Firebase telah berhasil, sebelumnya sempat ada masalah pada `permalink` yang saya gunakan, namun hal ini dapat diselesaikan karena bantuan dari teman bernama [Pringgo Radianto](https://t.me/error_log/) yang menyadari bahwa kesalahan ada pada `permalink` dan bukan `routing`. Setelah berhasil pindahan dari Github Pages ke Firebase ada beberapa hal yang saya sadari 

1. **Layanan `Spark` hanya menyediakan 1 GB Storage**  
    Hal ini mengejutkan saya karena batasannya hanya 1 GB, ketika melakukan perintah `bundle exec jekyll build ./_site` akan menghasilkan berkas sebesar 11 MB. Jika saya menjalankan _Challenge ODOA_ dimana sehari diperlukan satu artikel maka dalam 1 bulan akan meghabiskan _storage_ kurang lebih 300 MB, itu jika tidak ada kesalahan seperti typo atau tulisan yang kurang jelas. Untuk mengatasi ini Firebase memberikan opsi bagi kita untuk menghapus berkas yang sebelumnya kita _deploy_. Cukup pilih menu di tombol kanan daftar deploy dan pilih _Delete_, saya hanya menyediakan 3 berkas _deployment_ untuk berjaga-jaga.

    <img src="{{ site.url }}/img/firebase-delete-deploy.png" class="img-responsive" alt="Firebase Delete Deploy">

2. **Layanan Travis-CI Menggunakan Zona Waktu Berbeda**  
    Perihal ini menyebabkan ketika saya melakukan build untuk [linhub](https://linhub.io/) tidak menampilkan _post_ yang saya buat di zona waktu saya (GMT +9), hal ini dapat diakali dengan menambahkan `future: true` pada berkas `_config.yml`. Serta menambah baris berikut pada `.travis.yml`
    
    ```
    before_script:
        - export TZ=Asia/Jayapura
        - date
    ```

3. **Firebase tidak mengatur `Cache-Control` untuk berkas statis secara otomati**  
    Seperti yang kita ketahui, sangat penting untuk mengatur _resource_ yang bisa kita `cache` agar mengurangi waktu ketika _user_ membuka halaman [linhub](https://linhub.io). Untuk itu saya melakukan beberapa pengaturan melalui `firebase.json` menjadi seperti berikut

    ```
    {
    "hosting": {
        "public": "_site",
        "headers": [ {
        "source" : "**/*.@(eot|otf|ttf|ttc|woff|font.css)",
        "headers" : [ {
            "key" : "Access-Control-Allow-Origin",
            "value" : "*"
        } ]
        }, {
        "source" : "**/*.@(jpg|jpeg|gif|png)",
        "headers" : [ {
            "key" : "Cache-Control",
            "value" : "max-age=31536000"
        } ]
        }, {
        "source" : "404.html",
        "headers" : [ {
            "key" : "Cache-Control",
            "value" : "max-age=300"
        } ]
        }, {
        "source" : "**/*.@(css|js|ico)",
        "headers" : [ {
            "key" : "Cache-Control",
            "value" : "max-age=2592000"
        } ]
        } ]
        }
    }
    ```

Saat ini saya masih belum menemukan bagaimana melakukan pengaturan `Connection: keep-alive` pada firebase ini, karena hal ini menurunkan peringkat saya pada [Think With Google](https://testmysite.thinkwithgoogle.com/).

Seperti yang sudah saya sampaikan diatas, ketika melakukan migrasi ke Firebase [linhub](https://linhub.io/) melakukan perubahan `permalink` hal ini berpengaruh pada komentar teman-teman melalui Disqus. Sepertinya saya akan melakukan _mapping_ terlebih dahulu pada Disqus agar komentar lama dapat dimunculkan kembali.