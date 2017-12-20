---
layout: post
title: "Menentukan Array Berisi Nilai Dari Array Lain di Ruby"
subtitle: ""
description: "Cara Menentukan Jika Sebuah Array Berisi Nilai Setiap Dari Array Lain Di Ruby"
category: Ruby
tags: [ruby, array]
---
{% include JB/setup %}

Ketika sedang belajar ruby semalam, saya menemukan sedikit permasalahan untuk menentukan jika sebuah _array_ dalam ruby berisi nilai dari _array_ lain. Untuk lebih mudahnya ini seperti menentukan apakah _array_ `[1, 2, 3]` memiliki elemen dari _array_ `[3, 2, 4]`. Berikut adalah beberapa cara yang dapat dilakukan

<!--more-->
{% highlight ruby %}
array_1 = [1, 2, 3, 5, 6, 10, 15, 30]
array_2 = [3, 5, 7]

# mendapatkan intersection
array_1 & array_2

# cara cepat
(array_1 & array_2).empty?

# cara yang lebih mudah dibaca
array_1.any? {|x| array_2.include? x}
{% endhighlight %}

Bagi saya sendiri, saya lebih menyukai cara kedua. Hal ini dikarenakan saya lebih mudah membacanya dibandingkan cara pertama yang menggunakan _method_ `.empty`.