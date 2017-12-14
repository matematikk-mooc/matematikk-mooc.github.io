# Easily install a Canvas server on your own machine

The system is built to be as easy as possible to install and run. This
is done by packaging the application in [Docker][docker] images and
hosting them on the [Docker Hub][docker-hub-org].

## Install Docker

First thing you need to do is to install [Docker][docker-install] on your machine.

## Install the utility package

Make sure you have [Git][git] installed and do the following:

    git clone https://github.com/matematikk-mooc/mmooc.git
    cd mmooc

## Configure it

Edit env-example. Save it as env. You must fill in the following fields in section 1:

* CANVAS_LMS_ADMIN_EMAIL - This is the user name you will login with.
* CANVAS_LMS_ADMIN_PASSWORD - This is the password you will login with.
* CANVAS_LMS_ACCOUNT_NAME - This is the account you will have admin rights for.

In section 2:

* DOMAIN=localhost

## Boot it

In a terminal window:

### On Mac or Linux

    ./mm boot

### On windows

    ./mmdos

Booting the system will take some minutes. When it is finished, check that you have the
following containers running:
```

$ docker ps
CONTAINER ID        ...     NAMES
0b7d6fead167        ...     haproxy
311e1547299d        ...     web
b3c7b886283f        ...     cache
c3fcb357ef70        ...     db
```

Open a web browser and navigate to localhost.

Note that it can take a long time to load the system in the browser the first
time you try. If you get a timeout, do a reload of the browser to try again.

## Restarting / resetting

### On Mac or Linux
If you need to restart the running services after `./mm boot`,

    ./mm reboot

will stop, remove, re-pull and start the web, cache and database services. If
you need to get rid of the data as well, they're contained in two containers
named db-data and web-data. The following command will do the same as `reboot`,
but wipe the data containers as well:

    ./mm reset

### On windows
The reboot command on Mac/Linux do nothing else than a 

    ./docker stop web 
    ./docker rm web 

    ./docker stop cache 
    ./docker rm cache 

    ./docker stop db 
    ./docker rm db 

The Mac/Linux reset command, stops and removes the containers mentioned above, as well as

    ./docker stop web-data
    ./docker rm web-data 

    ./docker stop db-data 
    ./docker rm db-data 

You can register in the course "MatematikkMOOC-design" at [kurs.iktsenteret.no] to learn more 
about how to run your local Canvas server. Note that this course is in norwegian.

[docker-hub-org]: https://registry.hub.docker.com/repos/mmooc/
[docker-install]: https://docs.docker.com/installation/#installation
[docker]: http://docker.com
[kitematic]: https://kitematic.com/
[git]: https://git-scm.com/downloads
[kurs.iktsenteret.no]: https://kurs.iktsenteret.no
