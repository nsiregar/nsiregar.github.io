---
layout: post
title: "Menggunakan pdb Pada Python"
subtitle: ""
description: "Melakukan Pengawakutuan pada Python dengan pdb"
category: Python
tags: [python, debug, pdb]
---
{% include JB/setup %}

Menurut wikipedia, _debugging_ atau pengawakutuan adalah sebuah metode yang dilakukan oleh para pemrogram dan pengembang perangkat lunak untuk menganalisis alur kerja program, mencari dan mengurangi kekutu, atau kerusakan di dalam sebuah program komputer atau perangkat keras sehingga dapat bekerja sesuai dengan harapan.

Python memiliki sebuah _debugger_ yang menawarkan lingkungan untuk proses pengawakutuan pada program Python. _Debugger_ ini mendukung _conditional breakpoints_, _stack inspection_, serta melakukan _stepping_ pada kode sumber program Python, dan banyak hal lainnya.

### Menggunakan `pdb` Secara Interaktif
_Debugger_ pada Python merupakan sebuah _module_ standard dengan nama `pdb`. Untuk lebih jauh tentang `pdb`, silahkan mengacu kepada [dokumentasi](https://docs.python.org/3/library/pdb.html).

Untuk percobaan pertama kita akan membuat sebuah program sederhana sebagai berikut

```
list_number = [1, 2, 3]
list_alpha = [a, b, c]

def loop_in_loop():
    for number in list_number:
        print(number)
        for alpha in list_alpha:
            print(alpha)


if __name__ == 'main':
    loop_in_loop()
```

Simpan dengan nama `loop_in_loop.py`, kemudian jalankan perintah

```
$ python -m pdb loop_in_loop.py
```

