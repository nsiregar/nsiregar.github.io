---
layout: post
title: "Membuat Analisis Gage R&R"
subtitle: "Analisis Gage R&R dengan R"
description: "Membuat analisa gage r&r dengan menggunakan R"
category: SixSigma
tags: [r, statistic, gage]
---
{% include JB/setup %}

Jika pada artikel [sebelumnya](https://linhub.io/sixsigma/2017/03/27/mengenal-gage-rr) kita telah berkenalan dengan Gage R&R dan kegunaannya maka kali ini kita akan mencoba membuat analisa Gage R&R dengan menggunakan R. Sebagai contoh kasus, pada sebuah perusahaan baterai Sang Manager ingin melakukan improvement pada lini produksinya. Perusahaan ini menghasilkan tiga tipe baterai. Sebelum melanjutkan proses berikutnya pastikan kamu sudah

<!--more-->
1. Memasang paket SixSigma
    Jika belum memasang paket SixSigma lakukan dengan perintah `install.packages("SixSigma")`

2. Buat data frame sebagai berikut untuk contoh analisa

    | Voltmeter | Baterai | Uji ke-n | Voltase |
    |-----------|---------|----------|---------|
    | 1 | 1 | 1 | 1.4727 |
    | 1	| 1	| 2	| 1.4206 |
    | 1	| 1	| 3	| 1.4754 |
    | 1	| 2	| 1	| 1.5083 |
    | 1	| 2	| 2	| 1.5739 |
    | 1	| 2	| 3	| 1.4341 |
    | 1	| 3	| 1	| 1.5517 |
    | 1	| 3	| 2	| 1.5483 |
    | 1	| 3	| 3	| 1.4614 |
    | 2	| 1	| 1	| 1.3337 |
    | 2	| 1	| 2	| 1.6078 |
    | 2	| 1	| 3	| 1.4767 |
    | 2	| 2	| 1	| 1.4066 |
    | 2	| 2	| 2	| 1.5951 |
    | 2	| 2	| 3	| 1.8419 |
    | 2	| 3	| 1	| 1.7087 |
    | 2	| 3	| 2	| 1.8259 |
    | 2	| 3	| 3	| 1.5444 |

Sintaks dasar untuk membuat analisa Gage R&R pada lingkungan R adalah `ss.rr(var, part, appr, data, main, sub)` dengan detail

| Parameter | Deskripsi |
|-----------|-------------|
| var | Variasi yang diukur (hasil pengukuran) |
| part | Faktor yang diukur |
| appr | Faktor pengukur (mis. operator, voltmeter) |
| data | Data Frame yang digunakan |
| main | Judul untuk Diagram |
| sub | Subtitle untuk Diagram |

> Penting! Pastikan kamu sudah memanggil paket yang akan digunakan dengan `library(SixSigma)`

Untuk membuat diagram analisa, jalankan perintah berikut

    > my.rr <- ss.rr(var = voltage, part = battery,
        appr = voltmeter,
        data = batteries,
        main = "Six Sigma Gage R&R Measure",
        sub = "Batteries Project MSA")

Perintah diatas akan menghasilkan keluaran

    Complete model (with interaction):

                    Df  Sum Sq Mean Sq F value Pr(>F)
    battery            2 0.06308 0.03154   3.415  0.227
    voltmeter          1 0.04444 0.04444   4.812  0.160
    battery:voltmeter  2 0.01847 0.00924   0.584  0.573
    Repeatability     12 0.18982 0.01582               
    Total             17 0.31582                       

    alpha for removing interaction: 0.05 


    Reduced model (without interaction):

                Df  Sum Sq Mean Sq F value Pr(>F)
    battery        2 0.06308 0.03154   2.120  0.157
    voltmeter      1 0.04444 0.04444   2.987  0.106
    Repeatability 14 0.20829 0.01488               
    Total         17 0.31582                       

    Gage R&R

                        VarComp %Contrib
    Total Gage R&R    0.018162959    86.74
    Repeatability   0.014878111    71.05
    Reproducibility 0.003284848    15.69
        voltmeter     0.003284848    15.69
    Part-To-Part      0.002777127    13.26
    Total Variation   0.020940086   100.00

                        StdDev  StudyVar %StudyVar
    Total Gage R&R    0.13477002 0.8086201     93.13
    Repeatability   0.12197586 0.7318552     84.29
    Reproducibility 0.05731359 0.3438816     39.61
        voltmeter     0.05731359 0.3438816     39.61
    Part-To-Part      0.05269846 0.3161907     36.42
    Total Variation   0.14470690 0.8682414    100.00

    Number of Distinct Categories = 1 

Dan juga diagram seperti berikut

<img src="{{ site.baseurl }}/img/gage-rr-battery.png" class="img-responsive" alt="Gage R&R">

Diagram diatas menunjukkan beberapa hal yang bisa diamati sebelum mengambil keputusan untuk melakukan _improvement_, pada artikel selanjutnya saya akan menulis tentang menerjemahkan diagram Gage R&R untuk mengambil keputusan.
