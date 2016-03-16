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

# Trying it out

The system is built to be as easy as possible to install and run. This
is done by packaging the application in [Docker][docker] images and
hosting them on the [Docker Hub][docker-hub-org].

## Install Docker

First thing you need to do is to install Docker on your machine.

### On Mac OS X or Windows

Install and launch [Docker Toolbox][docker-toolbox]. This will give you a
terminal window that allows you to type the required commands
documented below. It will also install the [Kitematic][kitematic] GUI.

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

To get the URL you need to access the MOOC from a browser, run
one of the following 

```bash
# Option 1. Requires jq, should give only one result.
docker inspect web | jq '.[0].NetworkSettings.IPAddress'

# Option 2. Should give multiple identical results.
docker inspect web | grep '"IPAddress":'

# Option 3. Manual resolution.
docker inspect web # look for the "IPAddress" field manually, or use whatever
                   # JSON tool you prefer
```
The first line uses [jq][jq] to parse the JSON `docker inspect web` outputs.

Note that it can take a long time to load the system in the browser the first
time you try.

## (Optional) Try out the Matematikk-MOOC custom user interface

See [this document][branding-guide] for an explanation on how to
enable custom javascript and CSS.

The files you need to include are

- http://matematikk-mooc.github.io/frontend/mmooc-min.css
- http://matematikk-mooc.github.io/frontend/mmooc-min.js

[boot2docker]: http://boot2docker.io
[branding-guide]: http://guides.instructure.com/s/2204/m/4214/l/41896-how-do-i-brand-my-canvas-instance
[canvas]: https://instruture.com
[docker-hub-org]: https://registry.hub.docker.com/repos/mmooc/
[docker-install]: https://docs.docker.com/installation/#installation
[docker-toolbox]: https://www.docker.com/products/docker-toolbox
[docker]: http://docker.com
[ictcenter]: https://iktsenteret.no/english
[jq]: https://stedolan.github.io/jq/
[kitematic]: https://kitematic.com/
[mmooc-project-page]: https://iktsenteret.no/prosjekter/matematikk-mooc
