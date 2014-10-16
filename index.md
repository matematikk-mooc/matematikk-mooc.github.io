---
title: Matematikk-MOOC
layout: default
---

# About

Matematikk-MOOC is a project run by the Norwegian
[Center for ICT in Education][ictcenter]. The project aims to create a
course for continuing education of teachers of mathematics. Click
[here][mmooc-project-page] for more information about the project (in
Norwegian).

This page is for the documentation of the technical stuff.

## Disclaimer

This is very early in the project. At this stage things are likely to
change without any regards to backwards compatibility. Furthermore
this documentation is also likely to be out of date from time to time.

# Trying it out

The system is built to be as easy as possible to install and run. This
is done by packaging the application in [Docker][docker] images and
hosting them on the [Docker Hub][docker-hub-org].

## Install Docker

First thing you need to do is to install Docker on your machine.

### On Mac OS X (or Windows)

Install and launch [boot2docker][boot2docker]. This will give you a
terminal window that allows you to type the required commands
documented below.

With regards to Windows: The system should run fine under boot2docker
on Windows, but the commands described below will not work in a
Windows terminal.

### On Linux

See [this document][docker-install] for installation instructions for
your distribution. Once installed, open up a terminal window.

## Install the utility package

In a terminal window:

    wget https://github.com/matematikk-mooc/mmooc/archive/master.zip
    unzip master.zip
    cd mmooc-master

## Configure it

Edit env-example. Save it as env

## Boot it

In a terminal window:

    ./mm boot

Running `./b2d url` gives you the URL you need to use to access the MOOC from a browser.


# Give feedback

Please use [this form][new-issue] (on github) if you either have any
questions or want to report a bug.

# Running it in production

To be documented ...

Take a look at the boot command in the `mm` script in the `mmooc`
repository.

# For developers

## Setting up the development environment

    git clone git@github.com:matematikk-mooc/mmooc
    cd mmooc
    ./mgit clone

If you are using boot2docker:

    ./b2d init

To keep local Canvas changes in sync with boot2docker VM guest:

    ./b2d watch

*End boot2docker section*

Copy dependencies and configuration from the pre-installed canvas.

    docker run --rm -v $(pwd)/canvas-lms:/canvas-lms mmooc/canvas cp -a /opt/canvas-lms/vendor/bundle /canvas-lms/vendor
    docker run --rm -v $(pwd)/canvas-lms:/canvas-lms mmooc/canvas cp -a /opt/canvas-lms/.bundle /canvas-lms/
    docker run --rm -v $(pwd)/canvas-lms:/canvas-lms mmooc/canvas cp /opt/canvas-lms/Gemfile.lock /canvas-lms/
    docker run --rm -v $(pwd)/canvas-lms:/canvas-lms mmooc/canvas /bin/bash -c "cp /opt/canvas-lms/config/*.yml /canvas-lms/config"

Compile assets

    docker run --rm -t -i -P -v $(pwd)/canvas-lms:/canvas-lms --link db:db -w /canvas-lms mmooc/canvas npm install
    docker run --rm -t -i -P -v $(pwd)/canvas-lms:/canvas-lms --link db:db -w /canvas-lms mmooc/canvas bundle exec rake canvas:compile_assets


Start the development server

    ./mm rails-dev server


## Syncing upstream

    cd canvas-lms
    git fetch upstream
    git checkout master
    git merge upstream/stable

## Generating a self signed SSL certificate for use with HAProxy

    SUBJECT='/C=US/ST=California/L=San Francisco/CN=test@example.com'
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout example.key -out example.crt -subj "$SUBJECT"
    cat example.crt example.key > example.pem

## Making releases

[ictcenter]: https://iktsenteret.no/english
[mmooc-project-page]: https://iktsenteret.no/prosjekter/matematikk-mooc
[docker]: http://docker.com
[docker-install]: https://docs.docker.com/installation/#installation
[boot2docker]: http://boot2docker.io
[docker-hub-org]: https://registry.hub.docker.com/repos/mmooc/
[new-issue]: https://github.com/matematikk-mooc/matematikk-mooc.github.io/issues/new
