---
layout: post
title: "Melakukan Debugging pada Shell Script"
subtitle: "Debugging Shell Script pada Ubuntu 16.04"
description: "Debugging shell script"
category: Shell
tags: [shell, debug]
---
{% include JB/setup %}

Hari ini saya sudah sedikit enakan, karena suddah beristirahat selama beberapa hari kemarin. Ketika sedang membaca di situs [Pak Haji](https://rizaumami.github.io/2017/02/28/memeriksa-script-bash-menggunakan-shellcheck/) dan dilanjutkan ke situs [Om Ali](https://situsali.com/pemrograman/2017/04/20/belajar-bash-script-mengenal-shebang/) saya menjadi teringat akan bagaimana melakukan debug pada _shell script_ yang kita buat. Sebenarnya langkah ini hanya diperlukan bila _script_ yang kita buat cukup panjang. 

<!--more-->
### Membuat Executable Script
Untuk langkah ini kalian bisa mengikuti tutorial dari [Om Ali](https://situsali.com/pemrograman/2017/04/20/belajar-bash-script-mengenal-shebang/).

### Mengaktifkan Shell Script Debug Mode
Ada beberapa cara untuk mengkatifkan _debug mode_ pada _shell script_ yaitu:

- `-v` -- Mengaktifkan mode _verbose_.
- `-n` -- Opsi ini memberitahu untuk tidak melakukan eksekusi sekaligus melakukan _syntax check_.
- `-x` -- Opsi ini mengaktifkan _shell tracing mode_.

### Menjalankan Debug Mode
Untuk menjalankan _debug mode_ ada 2 cara yang dapat dilakukan yaitu:

1. Memanggil Opsi Debug  
    Opsi ini akan melakukan _debugging_ pada seluruh _script_, dan dapat dipanggil dengan
    ```
    $ /bin/bash -x test.sh -argumen1
    ```
2. Mengubah Berkas Executable  
    Opsi ini dapat dilakukan dengan mengaktifkan debug mode pada `she-bang` atau dengan opsi `set`. Berikut adalah contoh dengan mengubah `she-bang`.
    ```
    #!/bin/sh -x
    ```
    Atau dengan opsi `set` pada bagian tertentu dalam berkas, misal pada berkas berikut
    ```
    #!/bin/sh

    set -x
    echo "Halo"
    set +x
    ```
Dengan begitu anda dapat melakukan _debugging_ pada _shell script_ yang anda buat.
