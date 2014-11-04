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

Matematikk-MOOC is built using the open source LMS [Canvas][canvas].

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

### On Mac OS X or Windows

Install and launch [boot2docker][boot2docker]. This will give you a
terminal window that allows you to type the required commands
documented below.

### On Linux

See [this document][docker-install] for installation instructions for
your distribution. Once installed, open up a terminal window.

## Install the utility package

In a terminal window:

    curl -L -O https://github.com/matematikk-mooc/mmooc/archive/master.zip
    unzip master.zip
    cd mmooc-master

## Configure it

Edit env-example. Save it as env

For Windows users: To edit the file, type the following:

    tce-load -wi nano
    nano env-example

## Boot it

In a terminal window:

    ./mm boot

Running `./b2d url` gives you the URL you need to use to access the
MOOC from a browser. Note that it can take a long time to load the
system in the browser the first time you try.


# Give feedback

Please use [this form][new-issue] (on github) if you either have any
questions or want to report a bug.

# More information

Developers, system administrators and adventurous people can find more
information at the [project wiki][wiki].

[ictcenter]: https://iktsenteret.no/english
[canvas]: https://instruture.com
[mmooc-project-page]: https://iktsenteret.no/prosjekter/matematikk-mooc
[docker]: http://docker.com
[docker-install]: https://docs.docker.com/installation/#installation
[boot2docker]: http://boot2docker.io
[docker-hub-org]: https://registry.hub.docker.com/repos/mmooc/
[new-issue]: https://github.com/matematikk-mooc/matematikk-mooc.github.io/issues/new
[wiki]: https://github.com/matematikk-mooc/mmooc/wiki
