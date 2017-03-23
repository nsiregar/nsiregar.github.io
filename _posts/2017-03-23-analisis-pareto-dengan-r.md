---
layout: post
title: "Analisis Pareto dengan R"
description: "Analisa data kecacatan dengan menggunakan Grafik Pareto"
category: R
tags: [r, pareto, statistic]
---
{% include JB/setup %}

Beberapa saat lalu saya mendapat tugas negara untuk membuat presentasi dengan menampilkan analisis pareto, karena sedang belajar dengan R maka saya mencari beberapa petunjuk tentang membuat analisis pareto menggunakan R. Jika kamu belum tahu tentang analisis pareto, adalah tehnik yang biasa digunakan dalam fase Pengukuran dalam _Six Sigma_. Prinsip dari pareto sendiri cukup sederhana dimana _effort_ paling besar(80%) umumnya bergantung pada titik kunci yang terbatas(20%), karena itu biasa disebut aturan 80/20. Umumnya menentukan titik kunci ini menggunakan diagram Pareto.  


### Mengenal Grafik Pareto
Pada umumnya grafik pareto digunakan untuk 

- Menentukan _defect_ paling umum dalam sebuah proses  
- Mengidentifikasi _improvement_ dengan potensi keuntungan terbesar

Seperti yang telah disampaikan sebelumnya, dengan menggunakan grafi pareto maka akan mempermudah dalam menentukan _effort_ yang vital dan juga _effort_ yang trivial. 


### Menyusun Data Grafik Pareto
Misalkan anda memiliki data sebagi berikut  

<img src="{{ site.baseurl }}/img/defect-list.png" class="img-responsive" alt="Daftar Defect">

Jika menggunakan `MINITAB` maka anda dapat memasukkan data langsung kedalam `worksheet`, jika menggunakan `R` maka anda perlu membuat `vector` berisi data defect

    > defect.counts <- c(18,
                    6,
                    9,
                    7,
                    12,
                    10,
                    15,
                    8
    )

    > names(defect.counts) <- c("Cold Cracking",
                            "Incomplete Pentration",
                            "Inclusion",
                            "Gas Inclusion",
                            "Hot Cracking",
                            "Distortion",
                            "Re-Heat Cracking",
                            "Arc Strike Cracking"
    )

Ubah kedalam dataframe

    > df.defects <- data.frame(defect.counts)

Untuk melihat isi dari `vector` dan `dataframe`

    > defect.counts
            Cold Cracking Incomplete Pentration             Inclusion         Gas Inclusion          Hot Cracking            Distortion 
                    18                     6                     9                     7                    12                    10 
        Re-Heat Cracking   Arc Strike Cracking 
                    15                     8 
    > df.defects
                        defect.counts
    Cold Cracking                    18
    Incomplete Pentration             6
    Inclusion                         9
    Gas Inclusion                     7
    Hot Cracking                     12
    Distortion                       10
    Re-Heat Cracking                 15
    Arc Strike Cracking               8


### Menghasilkan Grafik Pareto
Untuk menghasilkan grafik pareto dari `MINITAB` bisa dilakukan dengan cara `Stat > Quality Tools > Pareto Chart` maka akan menghasilkan grafik seperti berikut

<img src="{{ site.baseurl }}/img/pareto-chart.png" class="img-responsive" alt="Grafik Pareto">

> Untuk menghasilkan grafik pareto dari R maka perlu menggunakan paket `qcc`, pasang dengan menggunakan `install.packages("qcc")`

Dengan menggunakan fungsi `pareto.chart()` dari librari `qcc` maka akan menghasilkan grafik pareto sebagai berikut

<img src="{{ site.baseurl }}/img/pareto-chart-r.png" class="img-responsive" alt="Grafik Pareto R">

Dari grafik diatas dapat kita simpulkan bahwa diperlukan _improvement_ pada area `Cold Cracking`, `Re-Heat Cracking`, dan `Hot Cracking`.


### Batasan penggunaan Grafik Pareto
Meskipun cukup mudah dibuat dan dibaca namun grafik pareto memiliki beberapa batasan antara lain:

- Diperlukan data yang reliabel, data yang dikumpulkan secara singkat untuk membuat grafik pareto akan membimbing pada kesimpulan yang salah.  
- Data yang dikumpulkan dalam waktu yang cukup panjang, memiliki kemungkinan adanya perubahan proses. Sehingga diperlukan perubahan distribusi tiap waktu.  
- Jika grafik pareto tidak menunjukkan hasil yang berarti, maka perlu dipastikan bahwa kita menggunakan data yang tepat. Jika terdapat data `Others`, pastikan nilainya tidak terlalu besar.  
- Fokus pada area dengan frekuensi tinggi akan mengurangi _defect_, dan fokus pada area dengan _impact_ terbesar akan memberikan potensi _improvement_ terbaik.  