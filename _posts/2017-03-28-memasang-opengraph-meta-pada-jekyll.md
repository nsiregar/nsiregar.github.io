---
layout: post
title: "Memasang OpenGraph Meta pada Jekyll"
subtitle: "Facebook OpenGraph Protocol"
description: "Memasang OpenGraph Meta pada situs jekyll"
category: Web
tags: [opengraph, meta, web, jekyll]
---
{% include JB/setup %}

Bagi yang sering menggunakan aplikasi _messaging_ seperti Telegram, Facebook Messenger, WhatsApp dan sebagainya pasti menyadari ketika membagikan sebuah link maka secara otomatis preview dari link tersebut ditampilkan.

<img src="{{ site.baseurl }}/img/opengraph.png" class="img-responsive" alt="Opengraph">

Ketika menggunakan Jekyll dengan Github Pages, laman web kita tidak secara otomatis menampilkan preview tersebut. Hal ini dikarenakan meta untuk OpenGraph belum kita atur. Bentuk umum meta HTML seperti berikut

{% highlight html %}
    <meta name="" content="" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="description" content="deskripsi" />
{% endhighlight %}

Untuk menambahkan meta OpenGraph rubah `_layouts/default.html` dengan menambahkan meta OpenGraph, meta ini memiliki beberapa _property_ antara lain:

- `og:title` - Judul

- `og:description` - Deskripsi dari laman

- `og:type` - Tipe konten, bisa berupa video, musik, atau artikel

- `og:image` - URL untuk gambar

- `og:url` - URL dari laman

Berikut adalah contoh penggunaan OpenGraph pada [linhub](https://linhub.io/) yang digabungkan dengan Liquid

{% highlight html %}{% raw %}

    {% if page.title %}
      <meta property="og:title" content="linhub [dot] io - {{ page.title }}">
    {% else %}
      <meta property="og:title" content="linhub [dot] io">
    {% endif %}
    {% if page.excerpt %}
      <meta property="og:description" content="{{ page.excerpt | strip_html | strip_newlines | truncate: 160 }}">
    {% elsif page.description %}
      <meta property="og:description" content="{{ page.description }}">
    {% else %}
      <meta property="og:description" content="Personal Blog of Ngalim Siregar">
    {% endif %}
    <meta property="og:url" content="{{ page.url | prepend: site.baseurl }}">
    <meta property="og:image" content="{{ site.baseurl }}/img/profile.jpg">
    <meta property="og:type" content="website">

{% endraw %}{% endhighlight %}

Untuk memeriksa apakah OpenGraph kita sudah tepat, kita bisa menggunakan _tool_ [berikut](https://developers.facebook.com/tools/debug/og/object/) dari Facebook. Untuk infomasi lebih lengkap mengenai Facebook OpenGraph silahkan kunjungi tautan [berikut](https://developers.facebook.com/docs/opengraph/getting-started/).