---
layout: post
title: "Mudah Memasang Ruby"
subtitle: "Memasang Ruby dengan RVM"
description: "Mudah memasang Ruby dengan RVM"
category: Ruby
tags: [ruby, rvm]
---
{% include JB/setup %}

Pada kesempatan kali ini saya ingin berbagi tentang bagaimana saya menggunakan Jekyll sebagai _platform_ blogging saya. Jekyll menggunakan bahasa pemrograman Ruby, dan seperti yang dilansir oleh beberapa teman pemasangan Ruby pada sistem operasi linux dianggap ribet, oleh karena itulah tercipta [RVM](https://rvm.io/). Saat ini saya selalu menggunakan ruby dengan RVM.

### Memasang RVM dan Ruby
Hal pertama yang perlu kita lakukan sebelum memasang `rvm` dan `ruby` adalah melakukan import `gpg` key, lakukan dengan perintah

    $ curl -sSL https://rvm.io/mpapis.asc | gpg2 --import -

Setelah melakukan impor key, kita dapat memasang `rvm` sekaligus dengan `ruby` melalui perintah

    $ \curl -sSL https://get.rvm.io | bash -s stable --ruby

Proses tersebut akan memakan waktu beberapa saat, tergantung koneksi. Sebelum dapat menggunakan `rvm` maupun `ruby` kita perlu memanggil `rvm` ke _environment_ kita dengan 

    $ source $HOME/.rvm/scripts/rvm

Atau kita dapat meletakkan perintah tersebut pada berkas `.bashrc` dengan perintah

    $ echo '[[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm"' >> .bashrc

Untuk memeriksa apakah `rvm` dan `ruby` sudah terpasang, anda dapat menggunakan perintah `which rvm`, jika telah terpasang maka akan mengembalikan path dari instalasi `rvm`.

### Mempercepat Instalasi Gem
Pada dasarnya instalasi gem itu cepat, tapi instalasi gem umumnya menyertakan _docs_. Padahal kebanyakan dari kita lebih suka membaca _docs_ dari _browser_ dengan koneksi internet. Hal ini menjadikan _docs_ yang terpasang menjadi mubadzir. Untuk itu kita perlu membuat berkas `.gemrc` pada `$HOME` dan mengisi dengan baris berikut

    gem: --no-rdoc --no-ri

Wekwekwek .. dengan begitu pemasangan gem tidak akan menyertakan _docs_, hemat bandwidth dan hemat storage.

### Menggunakan Rake
Hal berikutnya yang saya suka dari Jekyll adalah kita bisa menggunakan `rakefile` untuk membuat template post, page, dan hal-hal lainnya. Sebagai contoh, untuk membuat post saya hanya perlu mengetik perintah `$ rake post title="Judul"` dan sebuah berkas dengan template post jekyll saya pun tercipta. Berikut adalah contoh `rakefile` yang saya gunakan.

{% highlight ruby %}
require "rubygems"
require 'rake'
require 'yaml'
require 'time'

SOURCE = "."
CONFIG = {
'version' => "0.3.0",
'themes' => File.join(SOURCE, "_includes", "themes"),
'layouts' => File.join(SOURCE, "_layouts"),
'posts' => File.join(SOURCE, "_posts"),
'post_ext' => "md",
'theme_package_version' => "0.1.0"
}

desc "Begin a new post in #{CONFIG['posts']}"
task :post do
abort("rake aborted: '#{CONFIG['posts']}' directory not found.") unless FileTest.directory?(CONFIG['posts'])
title = ENV["title"] || "new-post"
tags = ENV["tags"] || "[]"
category = ENV["category"] || ""
category = "\"#{category.gsub(/-/,' ')}\"" if !category.empty?
slug = title.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
begin
    date = (ENV['date'] ? Time.parse(ENV['date']) : Time.now).strftime('%Y-%m-%d')
rescue => e
    puts "Error - date format must be YYYY-MM-DD, please check you typed it correctly!"
    exit -1
end
filename = File.join(CONFIG['posts'], "#{date}-#{slug}.#{CONFIG['post_ext']}")
if File.exist?(filename)
    abort("rake aborted!") if ask("#{filename} already exists. Do you want to overwrite?", ['y', 'n']) == 'n'
end

puts "Creating new post: #{filename}"
open(filename, 'w') do |post|
    post.puts "---"
    post.puts "layout: post"
    post.puts "title: \"#{title.gsub(/-/,' ')}\""
    post.puts 'subtitle: ""'
    post.puts 'description: ""'
    post.puts "category: #{category}"
    post.puts "tags: #{tags}"
    post.puts "---"
    post.puts "{% include JB/setup %}"
end
end
{% endhighlight %}

Perlu diingat sebelum menggunakan `rake` anda harus memasangnya dengan perintah `$ gem install rake`.

