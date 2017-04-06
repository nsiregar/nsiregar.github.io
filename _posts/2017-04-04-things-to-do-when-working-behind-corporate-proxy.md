---
layout: post
title: "Things To Do When Working Behind Corporate Proxy"
subtitle: "Konfigurasi Software untuk Bekerja di Belakang Proxy"
description: "Mengkonfigurasi software untuk bekerja di belakang "
category: Windows
tags: [proxy, shell]
---
{% include JB/setup %}

Sebenarnya ketika bekerja di kantor, saya menggunakan Windows 7 sebagai sistem operasi wajib (belum dapat giliran upgrade ke Windows 10). Selain itu ketika bekerja saya harus menggunakan proxy untuk akses internet, agar dapat bekerja dengan baik berikut adalah hal yang saya lakukan

## Setup Proxy Visual Studio Code
Untuk mengubah proxy pada visual studio code lakukan dengan mengubah berkas `settings.json` yang dapat diakses melalui `File -> Preferences -> Settings` dan tambahkan baris berikut

    {
        "http.proxy": "http://username:password@host:port"
    }

Selain mengubah proxy saya juga mengubah _shell_ default dari `cmd.exe` ke Windows Powershell v3 dengan mengubah `settings.json` menjadi

    {
        "http.proxy": "http://username:password@host:port",
        "terminal.integrated.shell.windows": "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe"
    }

Dengan ini maka ketika menekan `CTRL + Backtick` maka menjadikan powershell sebagai default shell kita

<img src="{{ site.url }}/img/powershell-vscode.png" class="img-responsive" alt="Powershell">

## Setup Proxy untuk Node.js `npm`
Selain Visual Studio Code saya juga menggunakan Node.js dan paket managernya `npm`, untuk menggunakan `npm` agar dapat bekerja dengan proxy ketik perintah berikut

    npm config set proxy http://username:password@host:port
    npm config set https-proxy https://username:password@host:port

`npm` akan membuat berkas `.npmrc` pada `C:\Users\username` berisi konfigurasi tersebut.

## Setup Proxy untuk Python `pip`
Selain Node.js saya juga menggunakan python dan paket manager `pip`, mengatur `pip` untuk dapat bekerja dengan proxy dapat dilakukan dengan membuat _environment variables_ dengan cara

    set http_proxy=http://username:password@host:port
    set https_proxy=https://username:password@host:port

Atau dengan cara manual dengan menambah _environment variables_ pada `Computer -> Properties -> Advanced system settings -> Environment Variables...`.

## Setup Proxy untuk `git`
Yang paling penting untuk melakukan `push` dengan `git` saya mengubah berkas `.gitconfig` pada `C:\Users\username` dengan menambah baris

    [http]
        proxy = http://username:password@host:port

    [https]
        proxy = https://username:password@host:port

Dengan begitu saya tetap bisa bekerja meskipun sedang berada dibalik _proxy_. Namun dari semua cara diatas, hal paling mudah adalah dengan membuat sebuah _virtual machine_ Linux yang di _redirect_ ke proxy yang disediakan.