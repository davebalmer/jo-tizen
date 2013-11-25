Jo Tizen Sample App
===================

A simple app with a menu and a few sample cards built using the joCache
feature to illustrate some simple features in Jo. See the full documentation
at http://joapp.com including license (open source, FreeBSD).


Setup
=====

1. Create a new blank Tizen Web App project in the IDE

   Menu: `File` -> `New` -> `Tizen Web App`
   Select: `Tizen` -> `Basic`
   Project name: Choose `Test` or whatever you like, so long as it's unique

2. Find the project files on your filesystem

   They should correspond to your IDE workspae folder.

3. Copy all the files in this zip into your project folder

   If asked, replace existing files (e.g. `index.html`)

4. From your Tizen IDE, right click on your project folder and select `Refresh`

   Make sure you see the `js/jo` folder (and the other files from the zip) 
   in your project folders.


Testing
=======

To test on the Web simulator
----------------------------

1. In the Tizen IDE, right click your project folder
2. Select `Run As` -> `Tizen Web simulator Application`

   Note that you most likely will need to change the zoom to view the entire
   device area on your screen.

To test on a device
-------------------

If you have a test device, plug it in and it should show up in your IDE, and
it should run or debug directly to it.

If you run with debug turned on, you'll have a full web inspector and debugger
which you can use to see what's going on inside the app.

Troubleshooting
---------------

Try making a fresh Tizen Web App as above, but try to run it before copying
over the Jo files. Then make sure your file copy works and that you refreshed
the IDE's file list.


Porting to Tizen
================

Moving over your existing Jo app is relatively simple. Just copy your existing
JS, CSS and HTML over to your Tizen web app project folder. Very similar to
what you did to get this sample working.

Some notes
----------

1. Make sure you get the latest source from GitHub for Jo (0.5.0+) from:
   http://github.com/davebalmer/jo or use the files from this zip.

2. Older CSS themes will not work with the Tizen native CSS scroller without
   updating; see above about getting latest/greatest.

3. Keep a copy of the index.html file provided in this zip, and pay special
   attention to the comments within. You may need to make corresponding tweaks
   to your project files (as you may have already with other platforms).

4. If you are using PhoneGap, your port should be pretty easy. If not, and your
   app accesses OS-specific APIs, you will want to get acquainted with the
   Tizen Web App API (very standards-based).

