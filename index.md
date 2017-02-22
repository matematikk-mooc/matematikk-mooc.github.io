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

# Try out the Matematikk-MOOC custom user interface

See [this document][branding-guide] for an explanation on how to
enable custom javascript and CSS in Canvas.

## January 2017 Canvas user interface
Somewhere between July 2016 and January 2017, Canvas did some minor changes in their html code. We have updated our design accordingly. 
If you are using the latest version of Canvas, you should use the CSS and JS files found here:
[https://github.com/matematikk-mooc/matematikk-mooc.github.io/tree/master/frontend/jan17](https://github.com/matematikk-mooc/matematikk-mooc.github.io/tree/master/frontend/jan17)


- Direct link to CSS file       : [https://raw.githubusercontent.com/matematikk-mooc/matematikk-mooc.github.io/master/frontend/jan17/mmooc-min.css](https://raw.githubusercontent.com/matematikk-mooc/matematikk-mooc.github.io/master/frontend/jan17/mmooc-min.css)
- Direct link to JS file: [https://raw.githubusercontent.com/matematikk-mooc/matematikk-mooc.github.io/master/frontend/jan17/mmooc-min.js](https://raw.githubusercontent.com/matematikk-mooc/matematikk-mooc.github.io/master/frontend/jan17/mmooc-min.js)

## July 10th 2016 Canvas user interface
July 10th 2016 it will no longer be possible to use the old Canvas user interface. After that date, or if you have already enabled the new design, you need to download the javascript and css files found here: 
[https://github.com/matematikk-mooc/matematikk-mooc.github.io/tree/master/frontend/new_ui](https://github.com/matematikk-mooc/matematikk-mooc.github.io/tree/master/frontend/new_ui)

- Direct link to CSS file       : [https://raw.githubusercontent.com/matematikk-mooc/matematikk-mooc.github.io/master/frontend/new_ui/mmooc-min.css](https://raw.githubusercontent.com/matematikk-mooc/matematikk-mooc.github.io/master/frontend/new_ui/mmooc-min.css)
- Direct link to JS file: [https://raw.githubusercontent.com/matematikk-mooc/matematikk-mooc.github.io/master/frontend/new_ui/mmooc-min.js](https://raw.githubusercontent.com/matematikk-mooc/matematikk-mooc.github.io/master/frontend/new_ui/mmooc-min.js)

You must then upload these two files in the Canvas theme editor.

## Old Canvas user interface
If you are running a Canvas release from before July 10th 2016 and you are using the old version of the Canvas user interface, the files you need to include are

- [https://matematikk-mooc.github.io/frontend/mmooc-min.css](https://matematikk-mooc.github.io/frontend/mmooc-min.css)
- [https://matematikk-mooc.github.io/frontend/mmooc-min.js](https://matematikk-mooc.github.io/frontend/mmooc-min.js)

## Own logo
If you want to use your own logo (which you probably do), you will have to host the files another place on GitHUB or another server you have access to.  
If you host your own Canvas installation, you could for example put your logo in the /public directory. 

To make the CSS file look for your logo in the right place, edit it and search for all occurences of "mmooc-logo.png" and "mmooc-logo@2x.png". Update the location of the files.

The logo files should have the formats 240x25 and 480x50.

For information on how to customize the design further, see 
[https://github.com/matematikk-mooc/frontend](https://github.com/matematikk-mooc/frontend).

# Install Canvas on your own machine
Read [how to install a Canvas server on your own machine.](server.md) 

[branding-guide]: http://guides.instructure.com/s/2204/m/4214/l/41896-how-do-i-brand-my-canvas-instance
[canvas]: https://instruture.com
[ictcenter]: https://iktsenteret.no/english
[mmooc-project-page]: https://iktsenteret.no/prosjekter/matematikk-mooc
