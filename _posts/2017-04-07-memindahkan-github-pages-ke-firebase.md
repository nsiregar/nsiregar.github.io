---
layout: post
title: "Memindahkan Github Pages ke Firebase"
subtitle: "Beralih ke Let's Encrypt dari Google"
description: "Menggunakan Firebase hosting untuk situs statis daru jekyll"
category: Firebase
tags: [firebase, jekyll]
---
{% include JB/setup %}

Jadi semalam teman-teman di Pegelinux sedang ramai membicarakan masalah `static web`. Sebagian besar member menggunakan Github Pages sebagai layanan hostingnya, karena pada artikel [Firebase Project Deployment from Github](https://linhub.io/firebase/2017/04/03/firebase-project-deployment-from-github) memungkinkan kita untuk melakukan _deploy_ ke Firebase melalui Travis-CI maka pada kesempatan ini kita akan coba memindahkan [blog ini](https://linhub.io) ke Firebase.

Kurang lebih cara yang akan kita lakukan sama dengan artikel [Firebase Project Deployment from Github](https://linhub.io/firebase/2017/04/03/firebase-project-deployment-from-github), namun ada beberapa perubahan pada `.travis.yml`. 

> Penting!!! jekyll menggunakan folder `_site` ketika melakukab build, gunakan folder tersebut sebagai _public directory_ dari proyek Firebase kita.

Buat berkas `.travis.yml` dengan isi sebagai berikut

    language: node_js
    node_js: '7.8.0'

    before_install:
    - rvm install 2.1
    - rvm use 2.1
    - . $HOME/.nvm/nvm.sh && nvm install 6.1 && nvm use 6.1
    - gem install bundler
    - bundle check || bundle install

    install:
    - npm install -g firebase-tools

    before_script:
        - chmod +x ./script/cibuild

    script: ./script/cibuild

    after_success:
    - firebase deploy --token $FIREBASE_TOKEN

    branches:
    only:
    - master

    env:
    global:
    - NOKOGIRI_USE_SYSTEM_LIBRARIES=true

    sudo: false

Selanjutnya buat _script_ untuk melakukan _build_ pada Jekyll

    #!/usr/bin/env bash
    set -e # halt script on error

    bundle exec jekyll build -d _site/my/baseurl
    bundle exec htmlproofer ./_site --only-4xx --check-favicon --check-html

Jangan lupa menambahkan `html-proofer` pada berkas `Gemfile` dengan

    gem "html-proofer"

Ujicoba _deploy_ dengan `git push` seperti biasa.


Sumber :
 <https://jekyllrb.com/docs/continuous-integration/travis-ci/>