---
layout: post
title: "Mengenal static dan Dynamic Typing"
subtitle: ""
description: ""
category: 
tags: []
---
{% include JB/setup %}

> Well I know when you're around cause I know the sound  
I know the sound, of your heart  
Well I know when you're around cause I know the sound  
I know the sound, of your heart

Lirik di atas adalah lirik lagu The Sound oleh 1975, ceritanya ini lagi _ngahaleuang_ gegara sering didenger lagunya. Lagunya enak sih ...

Di kesempatan kali ini saya ingin bercerita, jadi pada suatu hari seperti biasa obrolan di Pegelinux membahas masalah sehari-hari kemudian mencuatlah istilah _static typing_. Ketika saya belajar pemrograman pertama kali bahasa yang saya pelajari tidak mengharuskan deklarasi variabel, semua bebas sehingga saya pun terbiasa dengan kebebasan ini.

Namun sebuah pernyataan teman "Enjoy your `TypeError: undefined is not a function`" menyadarkan saya. Saya pun mulai meragukan kebebasan deklarasi variabel yang sering saya lakukan.

### Static vs Dynamic
Contoh sebuah bahasa yang menggunakan _static typed_ 

{% highlight go%}
package main

import "fmt"

func main() {

    // deklarasi string
    var a string = "initial"
    fmt.Println(a)

    // deklarasi integer
    var b, c int = 1, 2
    fmt.Println(b, c)

}
{% endhighlight %}

Dan berikut adalah bahasa yang _dynamic typed_

{% highlight python %}

x = "initial"
print(x)

x = 5
print(x)

{% endhighlight %}

Dari contoh diatas dapat disimpulkan bahwa _dynamic typing_ adalah sebuah mekanisme dimana variabel dapat dirubah secara _on the fly_ ketika akan dibaca _interpreter_. Sedangkan _static typing_ adalah dimana variabel yang telah dideklarasikan sebagai sebuah _type_ tertentu tidak dapat dirubah dengan mudah kemudian.

_Well_ .. sekarang saya sedang belajar Python, Ruby, dan Javascript. Dan semuanya _dynamic typing_, akan tetapi tidak masalah dengan terus belajar nanti pasti akan menemukan jalan ninja yang tepat.

<img src="{{ site.baseurl }}/img/sebatman.png" class="img-sticker" alt="Sebatman">
