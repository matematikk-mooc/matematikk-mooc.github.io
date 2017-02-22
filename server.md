# Easily install a Canvas server on your own machine

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

```bash
./mm url
```

It should detect if Docker is running in a VM, and output the correct `ip:port`
combination.

Note that it can take a long time to load the system in the browser the first
time you try.

## Restarting / resetting

If you need to restart the running services after `./mm boot`,

    ./mm reboot

will stop, remove, re-pull and start the web, cache and database services. If
you need to get rid of the data as well, they're contained in two containers
named db-data and web-data. The follwing command will do the same as `reboot`,
but wipe the data containers as well:

    ./mm reset

[docker-hub-org]: https://registry.hub.docker.com/repos/mmooc/
[docker-install]: https://docs.docker.com/installation/#installation
[docker-toolbox]: https://www.docker.com/products/docker-toolbox
[docker]: http://docker.com
[kitematic]: https://kitematic.com/
