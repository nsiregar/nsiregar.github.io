---
layout: post
title: "Membuat Matrix pada R"
description: "Membuat matrix dengan menggunakan software R"
category: r
tags: [r, matrix]
---
{% include JB/setup %}

Pada R dikenal beberapa `data objects` salah satunya ya `matrix`, `matrix` merupakan array 2d yang terdiri dari tipe data yang sama (mis. semua numerik atau semua teks). Untuk membuat matrix dapat dilakukan dengan beberapa cara :

- Menggunakan perintah `matrix()`, dimana langsung membagi `vector` dalam baris dan kolom.  
- Perintah `rbind()` perintah ini akan menggabungkan beberapa item kedalam baris, selain digunakan untuk `vector` perintah ini juga dapat digunakan untuk menggabungkan antar `matrix`  
- Lalu perintah `cbind()` yang mirip dengan `rbind()` namun digunakan untuk kolom  

Perintah `matrix()` akan berasumsi bahwa `vector` akan dibagi secara tepat, jika tidak maka perlu menambahkan item `NA`.

    > data = 1:10
    > data
    [1]  1  2  3  4  5  6  7  8  9 10

    > matrix(data, ncol = 3)
        [,1] [,2] [,3]
    [1,]    1    5    9
    [2,]    2    6   10
    [3,]    3    7    1
    [4,]    4    8    2
    Warning message:
    In matrix(data, ncol = 3) :
    data length [10] is not a sub-multiple or multiple of the number of rows [4]

    > matrix(data, ncol = 5)
        [,1] [,2] [,3] [,4] [,5]
    [1,]    1    3    5    7    9
    [2,]    2    4    6    8   10

    > matrix(data, ncol = 5, byrow = TRUE)
        [,1] [,2] [,3] [,4] [,5]
    [1,]    1    2    3    4    5
    [2,]    6    7    8    9   10

Dari perintah diatas dengan menambahkan `byrow = TRUE` maka perintah `matrix()` akan membagi `vector` berdasar baris, secara _default_ pembagian berdasar kolom. Jika pembagian kita tidak tepat maka akan muncul peringatan seperti perintah kedua diatas, dimana isi matrix akan mengulang dari awal karena itulah perlu menambahkan item `NA`.

Menggunakan perintah `rbind()` dan `cbind()` maka item akan digabungkan berdasar baris atau kolom

    > d1 = 1:4 ; d2 = 5:8 ; d3 = 9:12
    > d1 ; d2 ; d3
    [1] 1 2 3 4
    [1] 5 6 7 8
    [1]  9 10 11 12

    > rbind(d1, d2, d3)
    [,1] [,2] [,3] [,4]
    d1    1    2    3    4
    d2    5    6    7    8
    d3    9   10   11   12

    > cbind(d1, d2, d3)
        d1 d2 d3
    [1,]  1  5  9
    [2,]  2  6 10
    [3,]  3  7 11
    [4,]  4  8 12

Perintah tersebut akan menggunakan nama `vector` sebagai nama baris atau kolom. Untuk menambahkan baris atau kolom kedalam matrix, harus dipastikan bahwa dimensinya sama 

    > mat = cbind(d1, d2, d3)
    > mat
        d1 d2 d3
    [1,]  1  5  9
    [2,]  2  6 10
    [3,]  3  7 11
    [4,]  4  8 12

    > cbind(mat, d1)
        d1 d2 d3 d1
    [1,]  1  5  9  1
    [2,]  2  6 10  2
    [3,]  3  7 11  3
    [4,]  4  8 12  4

Semoga bermanfaat ...

