---
layout: post
title: "Operasi pada Array di Ruby"
subtitle: ""
description: "Operasi umum pada Array di Ruby"
category: Ruby
tags: [ruby, array]
---
{% include JB/setup %}

_Array_ atau Larik merupakan salah satu bentuk struktur data pada Ruby yang dapat menyimpan banyak data, disebut dengan elemen,  dengan suatu nama yang sama dan menempati tempat di memori yang berurutan (kontigu) serta bertipe data sama. Pada Ruby _array_ dapat berisi berbagai macam tipe data seperti angka, _string_, dan _object_ Ruby lainnya. Ketika kita memiliki data dalam bentuk _array_, kita dapat melakukan beberapa operasi seperti mengurutkan, menghapus duplikasi, membalik urutan, mengambil sebagian dari _array_, melakukan transformasi data, dan menjadikan sebuah _array_ kedalam satu nilai tertentu.

Pada kesempatan kali ini kita akan melakukan eksplorasi _method_ yang bisa kita gunakan dalam melakukan operasi pada _array_. Beberapa _method_ yang akan kita gunakan mungkin akan terasa baru, seperti _method_ yang menggunakan tanda seru (!) atau _method_ dengan tanda tanya(?). Untuk _method_ dengan tanda seru (!), berarti _method_ tersebut memiliki efek samping seperti merubah _array_ asli tanpa melakukan proses penyalinan atau memunculkan _exception_. Sedangkan _method_ dengan tanda tanya (?), menunjukkan bahwa _method_ tersebut mengembalikan nilai _boolean_.

### Akses Elemen pada _Array_
Seperti pada bahasa Python, _array_ pada Ruby dapat diakses langsung dengan menggunakan nomor indeksnya(dimulai dari 0) seperti berikut:

```
languages = ["Ruby", "Javascript", "Python"]
languages[0]    # "Ruby"
languages[1]    # "Javascript"
languages[2]    # "Python"
```

Selain itu kita dapat menggunakan _method_ `.first` dan juga `.last` untuk mengakses elemen pertama dan terakhir dari sebuah _array_ seperti berikut:

```
languages = ["Ruby", "Javascript", "Python"]
languages.first     # "Ruby"
languages.last      # "Python"
```

Jika kita mengakses indeks yang tidak ada, kita akan mendapatkan `nil`. Namun jika ingin memperoleh nilai galat, kita dapat menggunakan _method_ `.fetch` seperti berikut:

```
languages = ["Ruby", "Javascript", "Python"]
languages.fetch(42)     # IndexError: index 42 outside of array bounds: -3...3
languages.fetch(42, "None")     # "None"
```

### Mengambil Beberapa Elemen dari _Array_
Ada saatnya kita perlu mengambil beberapa elemen dari sebuah _array_, hal ini dapat dilakukan dengan menentukan nilai awal dari indeks _array_ dilanjutkan dengan jumlah elemen yang kita perlukan seperti berikut:

```
languages = ["Ruby", "Javascript", "Python", "Haskell"]
languages[1,2]  # ["Javascript", "Python"]
```

Pada potongan kode di atas, kita memulai dari indeks `1`, berisi `"Javascript"`, dan kita mengambil `2` elemen, dan kita mendapatkan _array_ baru berisi `"Javascript"` dan `"Python"`. Selain menggunakan metode tersebut kita dapat menggunakan _method_ `.slice` 

```
languages = ["Ruby", "Javascript", "Python", "Haskell"]
languages.slice(1,2)    # ["Javascript", "Python"]
```

Yang perlu diperhatikan adalah ketika menggunakan _method_ `.slice` maka kita akan mendapatkan _array_ baru tanpa merubah _array_ asli. Namun jika kita menggunakan _method_ `.slice!` maka _array_ asli akan berubah.

_Method_ lain yang bisa kita gunakan adalah `.take`, dimana _method_ ini akan memberikan kita jumlah elemen yang kita perlukan dimulai dari indeks pertama _array_ seperti berikut:

```
languages = ["Ruby", "Javascript", "Python", "Haskell"]
languages.take(2)   # ["Ruby", "Javascript"]
```

### Mendapat Nilai Acak dari _Array_
Terkadang kita memerlukan nilai acak untuk menentukan hasil undian, dengan menggunakan _array_ kita dapat menggunakan nilai awal dan akhir indeks untuk kemudian menghasilkan nilai acak. Namun cara termudah adalah dengan menggunakan _method_ `.sample` seperti berikut:

```
languages = ["Ruby", "Javascript", "Python", "Haskell"]
languages.sample        # Python
languages.sample(2)     # ["Ruby", "Javascript"]
```

_Method_ `.sample` juga menerima argumen untuk menentukan jumlah elemen acak yang kita perlukan.

### Pencarian dan Penyaringan _Array_
Ketika mencari sebuah elemen dari _array_ umumnya kita akan melakukan iterasi pada _array_ hingga menemukan elemen yang dimaksud. Kita dapat menggunakan _method_ `.include?`, yang menghasilkan nilai `boolean` ketika data yang dimaksud ditemukan atau tidak.

```
languages = ["Ruby", "Javascript", "Python", "Haskell"]
languages.include? "Haskell"    # true
languages.include? "Elixir"     # false
```

Perlu diketahui, _method_ `.include?` membutuhkan nilai yang benar-benar cocok, kita tidak dapat melakukan pencarian dengan nilai parsial seperti berikut:

```
languages = ["Ruby", "Javascript", "Python", "Haskell"]
languages.include? "Java"       # false
languages.include? "Rub"        # false
languages.include? "py"         # false
```

_Method_ lainnya adalah `.find`, dimana _method_ ini akan mengembalikan nilai pertama muncul yang sesuai dengan spesifikasi yang kita berikan, berikut contoh penggunaan `.find`:

```
languages = ["Ruby", "Javascript", "Python", "Haskell"]
languages.find {|language| language.include?("o")} # "Python"
```

Selain `.find` kita juga dapat menggunakan `.select` untuk menghasilkan _array_ baru berisi hasil yang sesuai dengan spesifikasi yang kita berikan, berikut contoh:

```
languages = ["Ruby", "Javascript", "Python", "Haskell"]
languages.select {|language| language.include?("a")}

# ["Javascript", "Haskell"]
```

Sedangkan untuk menghasilkan _array_ baru yang **tidak sesuai spesifikas**, kita dapat menggunakan _method_ `.reject`, berikut contoh:

```
languages = ["Ruby", "Javascript", "Python", "Haskell"]
languages.reject {|language| language.include("a")}

# ["Ruby", "Python"]
```

Sama seperti sebelumnya _method_ `.select` dan `.reject` juga menghasilkan _array_ baru tanpa merubah _array_ asli. Namun `.select!` dan `.reject!` mengubah _array_ asli.

### Mengurutkan Data pada _Array_
Proses pengurutan _array_ dapat dilakukan dengan _method_ `.sort` seperti berikut:

```
languages = ["Ruby", "Javascript", "Python", "Haskell"]
languages.sort      # ["Haskell", "Javascript", "Python", "Ruby"]
```

Jika ingin membalik urutan, kita dapat menggunakan _method_ `.reverse` seperti berikut:

```
languages = ["Haskell", "Javascript", "Python", "Ruby"]
languages.reverse   # ["Ruby", "Python", "Javascript", "Haskell"]
```

Proses pengurutan data dengan _method_ `.sort` dapat berubah menjadi kompleks, untuk melakukan pengurutan yang lebih kompleks kita dapat menggunakan operator pembanding (`<=>`) pada Ruby. Operator ini membandingkan objek Ruby sebagai berikut:

```
1 <=> 2     # -1
2 <=> 2     # 0
2 <=> 1     # 1
```

Berikut adalah contoh penggunaan operator pembanding dengan _method_ `.sort`:

```
languages = ["Ruby", "Javascript", "Python", "Haskell"]
languages.sort {|a,b| a <=> b}

# ["Haskell", "Javascript", "Python", "Ruby"]
```

Seperti _method_ sebelumnya `.sort` juga akan memberikan _array_ baru tanpa mengubah _array_ asli, gunakan `.sort!` jika kamu perlu mengubah _array_ asli.

### Menghapus Duplikasi Elemen
Ketika kita menggabungkan dua atau lebih _array_ kemungkinan kita akan mendapatkan nilai duplikasi

```
lang1 = ["Ruby", "Python"]
lang2 = ["Python", "Haskell"]
lang3 = ["Javascript", "Elixir"]

lang1 + lang2 + lang3
# ["Ruby", "Python", "Python", "Haskell", "Javascript", "Elixir"]
```

Kita dapat menggunakan _method_ `.uniq` untuk menghapus duplikasi tersebut

```
languages = ["Ruby", "Python", "Python", "Haskell", "Javascript", "Elixir"]
languages.uniq  # ["Ruby", "Python", "Haskell", "Javascript", "Elixir"]
```

Namun selain menggunakan _method_ `.uniq`, ketika proses penggabungan kita dapat menggunakan operator pipa `|` untuk menghindari duplikasi seperti berikut:

```
lang1 = ["Ruby", "Python"]
lang2 = ["Python", "Haskell"]

lang1 + lang2
# ["Ruby", "Python", "Python", "Haskell"]
```

### Transformasi Data _Array_
Untuk melakukan transformasi pada sebuah _array_, kita perlu melakukan operasi pada tiap elemen array tersebut. Hal ini dapat dilakukan dengan menggunakan _method_ `.map`, berikut adalah contoh sederhana untuk menjumlahkan tiap elemen _array_ dengan 2:

```
numbers = [1, 2, 3, 4, 5]
numbers.map {|number| number + 2}

# [3, 4, 5, 6, 7]
```

Sama seperti _method_ sebelumnya `.map` juga memiliki `.map!` jika diperlukan untuk mengubah _array_ asli.

### Mereduksi _Array_
Mungkin kita pernah dihadapkan kondisi untuk menjumlahkan nilai pada sebuah _array_. Hal ini dapat dilakukan dengan menggunakan _method_ `.reduce` berikut contoh:

```
numbers = [1, 2, 3, 4, 5]
numbers.reduce(0) {|result, current| result += current}

# 15
```

Dan _method_ `.reduce` juga bisa menggunakan _binary method_, sehingga cara diatas dapat ditulis sebagai berikut:

```
numbers = [1, 2, 3, 4, 5]
numbers.reduce(:+)

# 15
```

### Kesimpulan
Pada kesempatan ini kita telah melakukan beberapa operasi pada _array_ termasuk didalamnya mengakses elemen, melakukan pencarian pada _array_, mengurutkan _array_, dan beberapa hal lainnya. Operasi pada _array_ tersebut cukup berguna dalam memecahkan masalah yang sering dihadapi ketika melakukan pemrograman dengan Ruby.