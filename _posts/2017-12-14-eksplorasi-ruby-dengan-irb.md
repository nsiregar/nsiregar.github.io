---
layout: post
title: "Eksplorasi Ruby dengan IRB"
subtitle: ""
description: ""
category: Ruby
tags: [ruby, tips]
---
{% include JB/setup %}

IRB merupakan singkatan dari _Interactive Ruby_, sebuah perkakas _REPL_ (Read, Evaluate, Print, Loop) yang memungkinkan kita untuk mencoba kode Ruby tanpa harus membuat berkas `.rb`. Untuk menggunakan IRB sendiri cukup mudah, cukup dengan menjalankan perintah `$ irb` pada terminal dan mulai menulis baris kode pada _prompt_ IRB. Secara langsung IRB akan mengevaluasi kode dan menampilkan hasilnya.

<!--more-->
IRB sendiri memberikan akses langsung kepada semua fitur _built-in_ Ruby, termasuk juga `gem` yang telah kita _install_. Sebagai tambahan, kita dapat melakukan konfigurasi pada IRB untuk menyimpan _history command_ kita, mengaktifkan _auto-completion_ dan beberapa hal lainnya.

Pada kesempatan ini kita akan mencoba menggunakan IRB untuk menjalankan kode program, menggunakan _library_ via IRB, dan melakukan kustomisasi pada sesi IRB.

### Memulai IRB
Untuk memulai IRB cukup mudah, pastikan jika kamu telah memasang Ruby pada komputer yang kamu gunakan, lalu jalankan perintah `irb` pada terminal (command prompt pada Windows). Kemudian akan muncul _prompt_ IRB pada terminal sebagai berikut

```
irb(main):001:0>
```

Ini mengindikasikan bahwa IRB telah dijalankan dan semua yang akan dieksekusi akan dijalankan pada konteks `main` yang merupakan konteks tertinggi pada program Ruby. Selain itu _prompt_ ini juga menunjukkan nomor baris.

> Catatan: Jika menggunakan `rvm`, kemungkinan ada sedikit perbedaan pada _prompt_ yang muncul. Untuk menyamakan dengan tutorial ini jalankan perintah `irb` dengan opsi `--prompt inf-ruby`.

Untuk keluar dari IRB cukup dengan mengetikkan perintah `exit` atau menggunakan kombinasi tombol `CTRL+D`.

### Menjalankan Kode pada Sesi IRB
IRB merupakan sebuah perangkat yang mempermudah kita untuk mencoba suatu solusi terhadap permasalahan yang kita hadapi dengan cepat. Cukup dengan mengetikan kode pada IRB, maka kita dapat melihat yang hasil yang kita harapkan dengan langsung ketika dieksekusi. Contoh sederhana adalah dengan menjumlahkan dua angka pada IRB

```
irb(main):001:0> 1 + 2
=> 3
```

Simbol `=>` merupakan tanda yang mengindikasikan nilai dari statement yang kita eksekusi pada IRB. Contoh berikutnya 

```
irb(main):001:0> puts "Selamat Datang di Linhub"
```

Ketika menekan tombol `ENTER`, maka IRB akan menampilkan dua hasil

```
Selamat Datang di Linhub
=> nil
```

Baris pertama merupakan hasil dari _method_ `puts`, mencetak _string_ yang diinginkan dengan tambahan _line break_. Baris kedua menunjukkan nilai dari statement kita, karena setiap _method_ pada Ruby memiliki nilai _return_. Nilai dari _method_ `puts` adalah `nil`, dan ini yang ditunjukkan dengan IRB. Hal ini dapat membantu kita melakukan _debugging_ pada bentuk statement yang lebih kompleks, karena pesan galat akan mengacu pada nomor baris pada IRB.

Selain itu kita juga dapat memberi nila pada variabel untuk sesi IRB yang sedang kita jalankan sebagaimana program Ruby pada umumnya.

```
irb(main):002:0> nama = "Ngalim Siregar"
=> "Ngalim Siregar"
```

Variabel ini dapat kita gunakan seperti biasa

```
irb(main):003:0> puts nama
Ngalim Siregar
=> nil
```

Pembuatan statemen pada IRB dapat dilakukan dengan ekspresi satu baris atau multi baris. Berikut adalah penggunaan multi baris pada sesi IRB

```
irb(main):004:0> ["Linhub", "Ngalim", "Jekyll"].select do |text|
irb(main):005:1*  text.include?("i")
irb(main):006:1> end
 => ["Linhub", "Ngalim"]
```

Dengan menggunakan IRB kita dapat mengevaluasi kode sebelum kita implementasikan pada program yang sedang kita tulis.

### Menggunakan Pustaka dan Gem
Untuk menggunakan pustaka atau _libraries_ pada sesi IRB diperlukan _keyword_ `require` sebagaimana ketika menggunakan pustaka pada program Ruby umumnya. Pustaka yang bisa digunakan dapat berupa pustaka standard, program yang kita buat, atau bahkan `gem`, kumpulan pustaka yang didistribusikan melalui [rubygems.org](https://rubygems.org) yang bisa kita pasang dengan perintah `gem`.

Untuk pustaka standard dapat langsung kita panggil dengan perintah `require <nama_pustaka>`, namun untuk pustaka tambahan tidak dapat dipanggil secara langsung. Kita perlu memasang pustaka tersebut dengan perintah `gem install <nama_pustaka>`.

Untuk memanggil pustaka yang kita perlukan saat pertama kali memanggil IRB, kita dapat menggunakan opsi `-r` ketika menjalankan IRB. Sebagai contoh, ketika kita ingin memanggil pustaka `httparty` ketika pertama kali menjalankan IRB dapat dilakukan dengan

```
$ irb -r httparty
```

Dengan memanggil pustaka dan kode kita ke dalam IRB, kita dapat menginspeksi kode dengan lebih baik sebelum benar-benar mengintegrasikan ke program seutuhnya.

### Kustomisasi IRB
Konfigurasi untuk IRB disimpan pada berkas `.irbrc` pada direktori `home`, lebih mudah jika ditulis dengan `~/.irbrc`. Berikut adalah contoh konfigurasi untuk IRB 

```
require `irb/completion'

IRB.conf[:SAVE_HISTORY] = 1000
IRB.conf[:HISTORY_FILE] = '~/berkas_histori_irb'
IRB.conf[:AUTO_INDENT]  = true

def history(count = 0)

  history_array = Readline::HISTORY.to_a
  count = count > 0 ? count : 0

  if count > 0
    from = hist.length - count
    history_array = history_array[from..-1] 
  end

  print history_array.join("\n")
end
```

Pada contoh diatas, kita memanggil pustaka `irb/completion` untuk mengaktifkan fitur auto-complete pada IRB. Sedangkan method `history` dapat kita jalankan pada konsole IRB untuk menampilkan histori ke-n terakhir.

Hal yang perlu diperhatikan pada `.irbrc` adalah kita dapat memanggil beberapa pustaka yang sering kita gunakan, namun hal ini juga akan berpengaruh pada kecepatan IRB ketika pertama kali membuat sesi.

### Kesimpulan
Dengan menggunakan IRB, kita dapat melakukan berbagai eksperimen kode Ruby. Ini merupakan perangkat yang cukup membantu untuk mencoba alur program sebelum benar-benar dituliskan.
