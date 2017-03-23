---
layout: post
title: "Installing Odoo 10 from Source"
subtitle: ""
description: "Odoo installation"
category: Python
tags: [python, odoo]
---
{% include JB/setup %}  
Apparently installing odoo 10 from source require additional command to make sure odoo installation running smooth. Before execute command

`$ pip install -r requirements.txt`

Ensure to run these command to prevent error

**Install python header files required to build extension**

`$ sudo apt-get install python-dev` 

**Install pillow dependencies**

`$ sudo apt-get install libjpeg-dev libfreetype6-dev zlib1g-dev`

**Install lxml dependencies**

`$ sudo apt-get install libxml2-dev libxslt-dev`

**Install python-ldap dependencies**

`$ sudo apt-get install libsasl2-dev libldap2-dev libssl-dev`

Some users may skipping `less` installation instruction from odoo installation tutorial which caused error

`Could not execute command lessc`

To fix these error follow these steps

`$ sudo apt-get install nodejs`  
`$ sudo apt-get install npm`  
`$ sudo npm install -g less`  
`$ sudo npm install -g less-plugin-clean-css`  
`$ sudo ln -s /usr/local/bin/lessc /usr/bin/lessc`  
`$ sudo ln -s /usr/bin/nodejs /usr/bin/node`  

After the fix you have 3 options to do:  
1. Delete and create new database  
2. Install a module (e.g blog, website)  
3. Manually compile your `.less` files

