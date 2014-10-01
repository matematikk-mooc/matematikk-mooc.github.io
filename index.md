---
title: Matematikk-MOOC
layout: default
---

### About

Matematikk-MOOC is a project run by the Norwegian
[Center for ICT in Education][ictcenter]. The project aims to create a
course for continuing education of teachers of mathematics. Click
[here][mmooc-project-page] for more information about the project (in
Norwegian).

This page is for the documentation of the technical stuff.

### Disclaimer

This is very early in the project. At this stage things are likely to
change without any regards to backwards compatibility. Furthermore
this documentation is also likely to be out of date from time to time.

Do not use in production.

### Trying it out

The system is built to be as easy as possible to install and run. This
is done by packaging the application in [Docker][docker] images and
hosting them on the [Docker Hub][docker-hub-org].

#### Install Docker

First thing you need to do is to install Docker on your machine.

##### On Mac OS X (or Windows)

Install and launch [boot2docker][boot2docker]. This will give you a
terminal window that allows you to type the required commands
documented below.

With regards to Windows: The system should run fine under boot2docker
on Windows, but the commands described below will not work in a
Windows terminal.

##### On Linux

See [this document][docker-install] for installation instructions for
your distribution. Once installed, open up a terminal window.

#### Install the utility package

In a terminal window:

    wget https://github.com/matematikk-mooc/mmooc-docker/archive/master.zip
    unzip master.zip
    cd mmooc-docker-master

#### First time setup

Edit env-example. Save it as env

in a terminal window:


    ./bin/start db
    ./bin/setup


#### Starting the MOOC

    ./bin/start all

Running `./bin/url` gives you the URL you need to use to access the MOOC from a browser.


### Give feedback

### Running it in a production like environment

### For developers

#### Setting up the development environment

    for X in matematikk-mooc.github.io mmooc-docker-postgresql mmooc-docker-redis mmooc-docker-canvas mmooc-docker canvas-lms; do
      git clone git@github.com:matematikk-mooc/$X.git
    done

    cd canvas-lms
    git remote add upstream git@github.com:instructure/canvas-lms.git
    cd ..

Install rsync on boot2docker VM

    boot2docker ssh
    tce-load -wi rsync
    mkdir /opt/shares/canvas

Continously sync changes. Run the following in a new terminal window.

    fswatch -o canvas-lms | \
      xargs -t -n1 -I % \
      rsync -av -e "ssh -i $(boot2docker config 2> /dev/null | grep SSHKey | cut -d '"' -f2)" --exclude=.git canvas-lms/ --port=$(boot2docker config 2> /dev/null | grep SSHPort | cut -d' ' -f3) canvas-lms/ docker@$(boot2docker ip 2> /dev/null):/opt/shares/canvas/

Copy dependencies and configuration from the pre-installed canvas.

    docker run --rm -v /opt/shares/canvas:/canvas mmooc/canvas cp -a /opt/canvas-lms/vendor/bundle /canvas/vendor
    docker run --rm -v /opt/shares/canvas:/canvas mmooc/canvas cp /opt/canvas-lms/Gemfile.lock /canvas/
    docker run --rm -v /opt/shares/canvas:/canvas mmooc/canvas /bin/bash -c 'cp /opt/canvas-lms/config/*.yml /canvas/config'

Start a development server

    docker run --rm -t -i -P -v /opt/shares/canvas:/canvas --link db:db -w /canvas mmooc/canvas bundle exec rails server


#### Syncing upstream

    cd canvas-lms
    git fetch upstream
    git checkout master
    git merge upstream/stable


#### Making releases

[ictcenter]: https://iktsenteret.no/english
[mmooc-project-page]: https://iktsenteret.no/prosjekter/matematikk-mooc
[docker]: http://docker.com
[docker-install]: https://docs.docker.com/installation/#installation
[boot2docker]: http://boot2docker.io
[docker-hub-org]: https://registry.hub.docker.com/repos/mmooc/
