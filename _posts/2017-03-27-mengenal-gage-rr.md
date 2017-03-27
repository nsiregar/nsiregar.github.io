---
layout: post
title: "Mengenal Gage R&R"
subtitle: "Repeatable and Reproducible Measurement"
description: "Mengenal Gage R&R sebagai alat analisa untuk sistem pengukuran kinerja"
category: SixSigma
tags: [statistic, repeatable, reproducible, gage, measurement]
---
{% include JB/setup %}

> If you cannot measure it, you cannot improve it. - Lord Kelvin

Sebelum menganalisa data untuk sebuah _improvement_, yang pertama harus dikonfirmasi adalah kita telah melakukan pengukuran yang tepat. Hal ini dikarenakan ketika kita melakukan _improvement_ pada pengukuran yang kurang tepat memberikan biaya yang mahal. Jadi, bagaimana kita mengetahui apakah sebuah _improvement_ yang dilakukan valid dan tidak hanya produk dari suatu sistem pengukuran kinerja yang salah? Jika tidak dapat mempercayai sistem pengukuran , maka kita tidak bisa mempercayai data dari hasil pengukuran tersebut. 

Dengan menjalankan sebuah studi Gage R&R, maka akan memberikan informasi untuk mengidentifikasi masalah pada sistem pengukuran dan keandalannya. Selain itu studi ini juga akan membantu dalam membuat pengambilan keputusan berdasar pada data. 

### Apakah Gage R&R?
Gage R&R adalah sebuah studi yang dilakukan untuk menganalisa variasi pada proses pengukuran. Studi ini menguji _Repeatability and Reproducibility_ dari sistem pengukuran.

- Repeatability adalah variasi yang ditimbulkan karena perbedaan _equipment_, didalam variasi itu sendiri  
    Jika seorang operator A melakukan pekerjaan machining untuk komponen tipe A dengan alat tipe B secara berulang, apakah waktu yang diperlukannya akan tetap konsisten? Jika pertama kali melakukan machining memerlukan waktu 30 menit, apakah diperlukan waktu yang sama untuk komponen berikutnya?

- Reproducibility adalah variasi yang ditimbulkan karena perbedaan **operator**, diantara variasi yang ada  
    Jika operator A melakukan machining komponen tipe A dengan alat tipe B dalam waktu 30 menit, apakah diperlukan waktu yang sama oleh operator B? Bagaimana dengan operator C?

> Catatan:  
    Gage R&R tidak mengukur kualitas dari sebuah produk, namun kualitas dari sebuah sistem pengukuran. 

### Tipe Studi Gage R&R
Ada dua jenis tipe studi Gage R&R yang umum digunakan yaitu:

- Crossed Gage R&R
    - Metode terbaik, jika bisa dilakukan
    - Tiap operator mengerjakan tiap komponen
    - Komponen dikerjakan lebih dari satu kali
    - Pengamatan dalam pengerjaan komponen dilakukan dengan metode yang sama
    - mis. 3 operator, 4 komponen, 5 pengerjaan maka ada 3x4x5 = 60 pengamatan

- Nested Gage R&R
    - Jika metode diatas tidak bisa dilakukan, dikarenakan operator tidak dapat mengerjakan semua komponen
    - mis. Operator A mengerjakan komponen 1 dan 2, Operator B mengerjakan komponen 3 dan 4

Dan jika sistem pengukuran ternyata kurang bagus, maka Gage R&R dapat digunakan untuk menentukan di mana kelemahan yang ada. Sebagai contoh, mungkin sebuah penelitian mengungkapkan bahwa sementara _repeatibility_ baik, _reproducibility_ rendah. Maka Gage R&R dapat digunakan untuk menggali lebih dalam dan mencari tahu mengapa operator yang berbeda memerlukan waktu yang berbeda.