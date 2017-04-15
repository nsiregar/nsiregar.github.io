---
layout: post
title: "Menggunakan MPV Media Player"
subtitle: "Option MPV Player"
description: "Menggunakan option mpv untuk pemutar multimedia yang lebih baik"
category: Others
tags: [mpv, media player, ubuntu]
---
{% include JB/setup %}

Kalo kalian penggemar berat _idol_ Korea seperti [Pak Haji Mimin](https://rizaumami.github.io/), kalian pasti sering memutar _video clip_ artis kesayangan kalian. Mungkin ada yang menggunakan player [VLC](https://videolan.org/) atau player lainnya, tapi untuk masalah player ini saya lebih suka menggunakan [mpv](https://mpv.io/). Namun pertama kali menggunakan saya merasa aneh, ini kok gini-gini amat player, ga ada menu buat _config_ dan sebagainya.

Setelah beberapa saat tetap setia menggunakan `mpv` ini, akhirnya saya mendapat beberapa ilmu baru yang bisa digunakan. Balik lagi ke masalah nonton _video clip_ idol tadi, kalau kalian penggemar berat pasti simpanan _video clip_ udah banyak, terus gimana cara mainin video yang banyak sekaligus di `mpv`?

### Shuffle Video
Kadang kita pengen _video clip_ yang diputer ga berurutan, biar seru nebak-nebak lagu apa yang akan dimainkan. Dengan menggunakan `mpv` ini kalian bisa memainkan video secara _shuffle_ dengan perintah

    $ mpv --shuffle /nama/folder/koleksi/kalian/*

Dengan begitu mpv akan memainkan _video clip_ idol kalian secara acak.

### Memainkan Playlist
Udah punya _playlist_ yang disusun sesuai dengan urutan, biar dengernya bisa kebawa. Untuk memainkan dengan _playlist_ yang sudah disiapkan kalian cukup menggunakan perintah

    $ mpv --playlist=nama_playlist_kalian.pls

### Memainkan Semua Media dalam Folder
Ini adalah trik pamungkas, jika udah punya koleksi _serial movie_ pasti pengennya nonton sambung terus. Apalagi yang demen ama _anime_ dan _drakor_, dengan `mpv` kalian bisa memainkan semua media yang sudah disusun dalam _folder_ menggunakan perintah

    $ mpv /nama/folder/serial/*

Nah itu adalah trik yang saya pelajari ketika menggunakan `mpv`. Sebenarnya ada trik tambahan, kalian bisa menyimpan konfigurasi `mpv` ini di `/home/$USER/.mpv/config/`, untuk melihat daftar opsi apa saja yang ada pada `mpv` cukup gunakan perintah `mpv --help` atau `mpv --list-options`.
