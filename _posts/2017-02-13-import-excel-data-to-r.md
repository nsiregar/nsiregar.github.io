---
layout: post
title: "Import Excel Data to R"
subtitle: ""
description: ""
category: 
tags: [r, excel, data]
---
{% include JB/setup %}

Umumnya _spreadsheet_ Excel paling sering digunakan pada kehidupan sehari-hari, hal ini dikarenakan Excel merupakan tool 
yang paling mudah untuk melakukan penyimpanan dan analisa data pada berbagai aplikasi di dunia kerja. Untuk melakukan _import_ data 
dari Excel ke dalam R ada beberapa hal yang perlu kita perhatikan.  

<!--more-->
## Langkah 1  
Sebelum mulai melakukan _import_ data ke R, kita perlu melakukan _formatting_ pada data kita, berikut adalah beberapa hal yang 
perlu kita perhatikan dalam melakukan _formatting_ berkas Excel kita.  
- Baris pertama umumnya digunakan sebagai _header_, dimana kolom pertama digunakan untuk mengidentifikasi unit sampling  
- Hindari penggunaan _names, value,_ atau _field_ dengan _blank spaces_  
- Jika ingin menggabungkan kata, gunakan `.` (mis: `Panjang.Tanah`)  
- Lebih mudah menggunakan nama pendek  
- Hindari penggunaan simbol `? $ % ^ & * ( ) - # ? , < > / | \ [ ] {` dan `}` sebagai nama  
- Hapus semua _comment_ dari berkas Excel  
- Pastikan bahwa nilai-nilai yang hilang dalam rangkaian data ditunjukkan dengan `NA`  

## Langkah 2  
Pasang paket `xlsx` pada lingkungan R dengan `install.packages('xlsx')`, lalu panggil dengan `library('xlsx')`.  
Berikut adalah fungsi dasar untuk membaca berkas Excel :  

```
df <- read.xlsx("nama berkas", 
                sheetIndex = 1)
```  

**catatan** perlu menambahkan indeks atau nama _sheet_ pada penggunaan fungsi ini. Contoh diatas menggunakan indeks pertama dari berkas Excel yang di _import_.
Bila data yang akan di _import_ cukup besar, bisa menggunakan fungsi `read.xlsx2()`:  

```
df <- read.xlsx2("nama berkas",
                 sheetIndex = 1,
                 startRow= 2,
                 colIndex = 2)
```

Dengan melakukan _import_ data Excel ke R, anda dapat memulai melakukan analisis data dengan R.