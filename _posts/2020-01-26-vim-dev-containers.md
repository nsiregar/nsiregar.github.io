---
layout: post
title: "Vim Dev Containers"
subtitle: "Setup Vim for Containerized Development"
description: "Setup Vim for Containerized Development"
category: Development
tags: [vim, ruby, docker, ubuntu]
---
{% include JB/setup %}

I've been using vim and docker previously, but [this post](https://kirshatrov.com/2020/01/11/contributing-to-mri/) that explain how to use [vscode devcontainers](https://code.visualstudio.com/docs/remote/containers) amaze me.

<!--more-->

### Pre-Req
Before try this tutorial you should have `docker` and `docker-compose` installed.

### Setup Global .gitignore
Create `.gitignore_global` file to ignore `.containers` folder
```
$ echo '.containers' > ~/.gitignore_global
```

Then enable it by configure git
```
$ git config --global core.excludesfile ~/.gitignore_global
```


### Create `.containers` directory for your project
In this post, I will use `ruby` repository for example. You can clone the repository from github
```
$ cd workspace
$ git clone https://github.com/ruby/ruby.git
```

Create your `.containers` directory inside `ruby` repository
```
$ cd ruby
$ mkdir .containers
$ touch .containers/docker-compose.yml
$ touch .containers/Dockerfile
```

You will have file structure similar to this
```
/home/user/workspace/ruby/
    .containers
    | | docker-compose.yml
    | | Dockerfile
    other_ruby_files
```

Edit your `.containers/Dockerfile` with this
```
FROM ubuntu:18.04

WORKDIR /workspace

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y git ruby autoconf bison gcc make zlib1g-dev libffi-dev libreadline-dev libgdbm-dev libssl-dev build-essential tzdata
```
  
> You'll need `tzdata` to running timezone-related tests in `ruby` repository

Before create compose file, some tests in `ruby` refer to `[::1]` as localhost, which makes us to enable `ipv6` in our container.
Configure your `docker` to enable `ipv6` by editing `/etc/docker/daemon.json`

```
{
    "ipv6": true,
    "fixed-cidr-v6": "2001:db8:1::/64"
}
```

Then reload docker with `$ sudo systemctl reload docker`

Edit your `.containers/docker-compose.yml` with

```
version: '3'

services:
  dev:
    build:
      dockerfile: Dockerfile
      context: ./
    sysctls:
      - net.ipv6.conf.all.disable_ipv6=0
    command: sleep infinity
    volumes:
      - .bash_history:/root/.bash_history
      - ./..:/workspace:cached
```

To make persistent command history in our container, we can mount `.bash_history`.

### Build Containers
Next we need to build our containers then running it as a daemon
```
$ docker-compose -f .containers/docker-compose.yml build
$ docker-compose -f .containers/docker-compose.yml up -d
```

To compile `ruby` and running tests, we need to use container shell
```
$ docker-compose -f .containers/docker-compose.yml exec dev bash
```

### Build Ruby and Running Tests
To build `ruby` we need to run several commands based on `README.md` files

> These commands run in your docker container


```
root@docker-hash-container:/workspace# autoconf
root@docker-hash-container:/workspace# ./configure
root@docker-hash-container:/workspace# make
```

To running tests

```
root@docker-hash-container:/workspace# make test-all #running all tests
root@docker-hash-container:/workspace# make test-all TESTS='test/ruby/test_time_tz.rb' #running single file test
```

### Create shortcut
If you want to connect container's shell via `vim`, you can add following lines to your `.vimrc`

```
nnoremap <silent> <leader>dev :terminal docker-compose -f .containers/docker-compose.yml exec dev bash<CR>
```

Now you can connect to container's shell with `<leader>dev`, but you should spawn your container first.
I also create alias in my `.zshrc` for easier command

```
alias container='docker-compose -f .containers/docker-compose.yml'
```

Now you can spawn or kill container with

```
$ container build #for build container
$ container up -d #for running container in background
$ container exec dev bash #for connecting to container shell
$ container down #for shutting down container
```

### What Next
- Check some ruby bugs in [Ruby Issue Tracker](https://bugs.ruby-lang.org/projects/ruby-master/issues) to fix

Now you can still use vim as editor, and have containerized development env.
