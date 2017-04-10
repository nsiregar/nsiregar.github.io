---
layout: post
title: "DigitalOcean Monitoring Beta"
subtitle: ""
description: "DigitalOcean Monitoring Beta"
category: 
tags: [do, vps, monitoring]
---
{% include JB/setup %}  
Sekitar tanggal 15 Februari 2017 lalu saya mendapat surel dari DigitalOcean, mengenai undangan untuk mencoba fitur beta mereka tentang monitoring server kita.  

<img src="{{ site.baseurl }}/img/digitalocean-monitor.gif" class="img-responsive" alt="digitalocean-monitor">  

Fitur ini hanya bisa dijalankan pada droplet yang sudah terpasang [agent baru dari DO](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-the-digitalocean-agent-for-additional-droplet-graphs) 
ketika akan membuat droplet pastikan anda memilih "Monitoring" pada bagian _additional options_. Jika ingin memasang agent pada droplet yang sudah terpasang bisa menggunakan  

`curl -sSL https://agent.digitalocean.com/install.sh | sh`  

Namun saat ini CoreOS, FreeBSD, dan Fedora belum didukung, alert ini nantinya bisa diintegrasikan dengan email dan juga slack sehingga lebih membantu team yang membutuhkan.