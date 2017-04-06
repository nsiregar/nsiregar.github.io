---
layout: post
title: "Mengenal RSS Feed"
subtitle: "Panduan Singkat Membuat RSS Feed pada Jekyll"
description: "Membuat RSS Feed pada Jekyll"
category: Web
tags: [rss, tag]
---
{% include JB/setup %}

Bagi para blogger mungkin sudah tidak asing tentang RSS, sebuah teknologi yang memungkinkan kita untuk berlangganan artikel pada sebuah situs web tertentu. Pada Jekyll untuk menghasilkan sebuah RSS Feed dapat menggunakan dua buah cara yaitu :

- Menggunakan Plugin Jekyll - `jekyll-feed`  

- Menggunakan Liquid

Pada kesempatan ini kita akan membahas cara kedua, yaitu menggunakan Liquid. Sebuah RSS Feed sebenarnya adalah sebuah berkas `.xml` yang memiliki meta data mengenai sebuah situs, yang diikuti dengan konten dari situs tersebut. Umumnya berupa artikel yang diposkan oleh penulis lengkap dengan judul, deskripsi, tanggal terbit dan juga link. Ketika seseorang berlangganan RSS Feed dari sebuah situs maka _aggregator_ mereka akan secara periodik memeriksa dokumen `.xml` ini untuk item baru.

Untuk membuat RSS Feed menggunakan Liquid, pertama-tama kita perlu membuat berkas `rss.xml` atau `feed.xml` pada direktori utama jekyll. Berikut adalah contoh isi `rss.xml` untuk [linhub.io](https://linhub.io/) yang berisi :

{% highlight html %}{% raw %}
---
layout: null
title : RSS Feed
---

<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
        <title>{{ site.title | xml_escape }}</title>
        <description>{{ site.title | xml_escape }} - {{ site.author.name | xml_escape }}</description>
        <link>{{ site.production_url }}</link>
        <atom:link href="{{ site.production_url }}{{ site.JB.rss_path }}" rel="self" type="application/rss+xml" />
        <lastBuildDate>{{ site.time | date_to_rfc822 }}</lastBuildDate>
        <pubDate>{{ site.time | date_to_rfc822 }}</pubDate>
        <ttl>60</ttl>

{% for post in site.posts limit:20 %}
        <item>
                <title>{{ post.title | xml_escape }}</title>
                <description>{{ post.content | xml_escape }}</description>
                <link>{{ site.production_url }}{{ post.url | uri_escape }}</link>
                <guid>{{ site.production_url }}{{ post.id }}</guid>
                <pubDate>{{ post.date | date_to_rfc822 }}</pubDate>
                {% for cat in post.categories %}
                        <category>{{ cat | xml_escape }}</category>
                {% endfor %}
        </item>
{% endfor %}
</channel>
</rss>
{% endraw %}{% endhighlight %}

Semua _variable_ yang ada dalam berkas tersebut didefinisikan dalam `_config.yml`. _Tag_ yang wajib ada pada sebuah RSS Feed antara lain:

- `<title>` - Nama dari kanal RSS

- `<link>` - URL untuk situs

- `<description>` - Deskripsi dari isi _feed_

Lalu bagaimana agar _aggregator_ secara otomatis mendeteksi RSS Feed kita, hal ini dilakukan dengan menambahkan link pada `<head>` di `_layouts\default.html`

    <link rel="alternate" type="application/rss+xml" title="linhub" href="{{ site.baseurl }}/rss.xml">

Dengan begitu RSS Feed kita dapat diakses oleh _aggregator_ RSS. Ada beberapa tag yang dapat digunakan dalam membuat berkas `.xml` ini, silahkan gunakan referensi [ini](https://www.make-rss-feeds.com/rss-tags.htm) sebagai acuan. Pada tulisan Pak Haji Mimin di [sini](https://rizaumami.github.io/2017/03/27/my-favourite-firefox-plugins/) disebutkan mengenai [Bamboo Feed Reader](https://addons.mozilla.org/en-US/firefox/addon/bamboo-feed-reader/) sebagai favorit beliau untuk _Feed Reader_, namun saya lebih memilih [NewsFox](https://newsfox.mozdev.org/) sebagai _Feed Reader_ hal ini dikarenakan tampilan dari NewsFox yang mirip dengan _mail client_.

<img src="{{ site.url }}/img/newsfox-rss.png" class="img-responsive" alt="NewsFox">

Selain itu [NewsFox](https://newsfox.mozdev.org/), juga dapat mengkategorikan artikel sesuai yang dipetakan oleh pemilik situs dengan meta `<category>`.

Ayo bagi _RSS Feed_ situsmu pada komentar dibawah ...
