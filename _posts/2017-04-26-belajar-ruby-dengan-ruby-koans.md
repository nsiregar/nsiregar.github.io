---
layout: post
title: "Belajar Ruby dengan Ruby Koans"
subtitle: "Belajar Memecahkan Masalah dengan TDD"
description: "Belajar TDD dengan Ruby Koans"
category: Ruby
tags: [ruby, koans]
---
{% include JB/setup %}

> I'll quote "on the road" like a twat  
And wind my way out of the city  
Finding a girl who is equally pretty won't be hard  
Oh, I just had a change of heart  
**[Instrumental Interlude]**  
You smashed a glass into pieces  
That's around the time I left  
And you were coming across as clever  
Then you lit the wrong end of your cigarette  

Lirik diatas adalah lagu kedua yang saya suka dari The 1975, A Change of Heart. Saya sangat suka bagian _instrumental interlude_ dimana musiknya asik bet lah, kalian musti dengar lagu yang satu ini.

<!--more-->
Lanjut lagi .. Jadi sekarang saya ceritanya pengen belajar Ruby, sekilas kalau saya lihat code Ruby sepertinya mirip dengan Python, tanpa `;` tanpa pembukaan `{` untuk fungsi dan _dynamic typing_ .. _Kek .._.

Ketika sedang mencari bahan belajar, seorang teman menyarankan untuk belajar Ruby dengan Ruby Koans. Ruby Koans sendiri merupakan sebuah alat pembelajaran yang diciptakan dengan metode TDD, jika kalian belum mengerti TDD mungkin artikel teman [ini](https://prehistoric.me/tdd-jasmine-intro/) bisa sedikit memberi pencerahan.

Hal pertama yang perlu dilakukan untuk belajar dengan koans ini tentu adalah dengan mengunduhnya, setelah itu dapat menjalankan perintah berikut pada folder Koans:

    $ ruby path_to_enlighttenment.rb

Kalian akan mendapat pesan galat yang merujuk ke berkas dan nomor baris.

<img src="{{ site.baseurl }}/img/ruby-koans.png" class="img-responsive" alt="Ruby Koans">

Ketika membuka berkas `about_asserts.rb` seperti yang ditunjukkan di atas, maka kita akan dapat melihat komentar-komentar yang membantu kita untuk memecahkan solusi untuk permasalahan diatas.

Satu hal yang perlu diperhatikan ketika _self learning_ dengan Koans ini adalah **jangan menyontek**, karena saat ini banyak sekali solusi dari Ruby Koans yang bertebaran di Github. Usahakan mencari solusi dengan membaca buku-buku Ruby atau bertanya pada forum jika memang sudah tidak menemukan solusi dari buku.

Seperti yang ditulis pada artikel teman tentang TDD, dimana ada fase `Red, Green, Refactor`, maka ketika belajar dengan Koans ini pun sebisa mungkin jalankan fase tersebut. Jika perlu mengingat lagi maka :

1. Red Phase -- Fasa dimana menulis tes yang gagal dijalankan
2. Green Phase -- Fase dimana kita berhasil lolos dari tes yang diberikan
3. Refactor Phase -- Fase dimana kita melihat kembali kode yang dijalankan, dan melihat kemungkinan lebih baik

_Well_ saya pun juga masih baru dengan Koans ini, tetap semangat belajar ..
