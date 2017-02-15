---
layout: post
title: "Compiled atau Interpreted?"
description: "Pemilihan bahasa pemrograman terkompilasi atau terinterpretasi"
category: 
tags: [bahasa, interpreter, compiler]
---
{% include JB/setup %}

Beberapa hari lalu teman-teman membahas mengenai bahasa pemrograman yang _compiled_ dan juga _interpreted_, bahasan ini sebenarnya mengacu pada performa yang ditimbulkan 
ketika mengeksekusi sebuah _script_ atau program. Lalu dimanakah perbedaanya?  

### Interpreter dan Compiler  
Agak kurang tepat jika mengatakan sebuah bahasa diterjemahkan atau dikompilasi karena keduanya merupakan sebuah properti dari implementasi bahasa pemrograman tersebut, 
dan *bukan* properti dari bahasa tersebut. Jadi, secara teori sebuah bahasa dapat dikompilasi atau diterjemahkan - tergantung pada implementasi yang digunakan.  

### Implementasi Kode Terkompilasi  
Pada implementasi kompilasi kode program, sebuah _compiler_ secara langsung menerjemahkan kode sumber ke bentuk kode mesin - sebuah kode yang secara spesifik dijalankan 
oleh mesin. Kemudian komputer akan menjalan kode mesin tersebut.  

### Implementasi Kode Terinterpretasi  
Pada implementasi ini kode sumber tidak dijalankan langsung oleh mesin, disini sebuah program (_interpreter_) akan membaca dan mengeksekusi kode sumber. Pada implementasi ini 
kode sumber asli umumnya juga diubah kedalam _intermediate code_ yang kemudian diproses oleh _interpreter_ untuk diubah ke dalam _machine code_.  

### Mana yang lebih menguntungkan?  
Sebenarnya pembandingan model bahasa terkompilasi dan terinterpretasi ini sangat tergantung pada implementasi penggunanya, sehingga perbandingan yang dapat kita ambil 
umumnya hanya secara general:  
- Bahasa terkompilasi memiliki keuntungan untuk lebih *cepat* hal ini dikarenakan kode diterjemahkan langsung ke _native code_.  
- Bahasa terinterpretasi memiliki keunggulan lebih _portable_ dan juga lebih mudah untuk dipelajari <- ini tergantung dari niat sih.