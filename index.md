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

##### On Mac OS X or Windows

Install and launch [boot2docker][boot2docker]. This will give you a
terminal window that allows you to type the required commands
documented below.

##### On Linux

See [this document][docker-install] for installation instructions for
your distribution. Once installed, open up a terminal window.

#### Install the utility package

In a terminal window:

```
wget https://github.com/matematikk-mooc/mmooc-docker/archive/master.zip
unzip master.zip
cd mmooc-docker-master
```

#### First time setup

Edit env-example. Save it as env

in a terminal window:

```
./bin/start db
./bin/setup
```

#### Starting the MOOC

```
./bin/start all
```

Running

```
./bin/url
```

Gives you the URL you need to use to access the MOOC from a browser.


### Give feedback

### Running it in a production like environment

### For developers

#### Setting up the development environment

```
for X in matematikk-mooc.github.io mmooc-docker-postgresql mmooc-docker-redis mmooc-docker-canvas mmooc-docker canvas-lms; do
  git clone git@github.com:matematikk-mooc/$X.git
done

cd canvas-lms
git remote add upstream git@github.com:instructure/canvas-lms.git
```

#### Syncing upstream

```
cd canvas-lms
git fetch upstream
git checkout master
git merge upstream/stable
```

#### Making releases

[ictcenter]: https://iktsenteret.no/english
[mmooc-project-page]: https://iktsenteret.no/prosjekter/matematikk-mooc
[docker]: http://docker.com
[docker-install]: https://docs.docker.com/installation/#installation
[boot2docker]: http://boot2docker.io
[docker-hub-org]: https://registry.hub.docker.com/repos/mmooc/
