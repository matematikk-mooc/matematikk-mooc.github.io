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

Note: The changes in the CSS and Javascript files below depend on the Canvas [DOM](https://en.wikipedia.org/wiki/Document_Object_Model). 
Their DOM is not carved in stone. Canvas updates their code every three weeks, 
so if you run our design on their servers you should test that it works when Canvas release their beta version.
 You then have three weeks to fix any discreapancies. We also hope you will share your fixes with the rest of the community. 
 That way it will be easier to maintain the design.
 
 <img src="http://www.publicdomainpictures.net/pictures/180000/velka/hieroglyphs-14641949174f2.jpg " alt="The Canvas DOM is not carved in stone" style="width: 200px;"/>	    
 *The Canvas DOM is not carved in stone.*

## Latest version of Canvas user interface

To include the latest version of the design files, you can upload the following files

- [https://matematikk-mooc.github.io/mmooclatest.css](https://matematikk-mooc.github.io/mmooclatest.css)
- [https://matematikk-mooc.github.io/mmooclatest.js](https://matematikk-mooc.github.io/mmooclatest.js)

They contain symbolic links to the two following files, which will be maintained to support the latest Canvas version at any time (hopefully):

- [https://matematikk-mooc.github.io/frontend/mmooc-min.css](https://matematikk-mooc.github.io/frontend/mmooc-min.css)
- [https://matematikk-mooc.github.io/frontend/mmooc-min.js](https://matematikk-mooc.github.io/frontend/mmooc-min.js)


## Own logo and other colors
If you want to use your own logo (which you probably do), you will have to host the files another place on GitHUB or another server you have access to.  If you host your own Canvas installation, you could for example put your logo in the /public directory. 

To make the CSS file look for your logo in the right place, edit it and search for all occurences of ".png" and "@2x.png". Update the location of the files.

Originally, the logo files for the MatematikkMOOC project had the formats 240x25 and 480x50. When the Norwegian
[Center for ICT in Education][ictcenter] started using the design on [their own Canvas server](https://kurs.iktsenteret.no), the size was adjusted
to their logo. Therefore you might need to adjust other settings for the logo as well. For information on how to adjust these settings, changing the color palette and customize the design further, see 
[https://github.com/matematikk-mooc/frontend](https://github.com/matematikk-mooc/frontend).

# Install Canvas on your own machine
Read [how to install a Canvas server on your own machine.](server.md) 

[branding-guide]: http://guides.instructure.com/s/2204/m/4214/l/41896-how-do-i-brand-my-canvas-instance
[canvas]: https://instruture.com
[ictcenter]: https://iktsenteret.no/english
[mmooc-project-page]: https://iktsenteret.no/prosjekter/matematikk-mooc
