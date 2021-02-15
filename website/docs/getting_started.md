---
id: getting_started
title: Getting Started
sidebar_label: Getting Started
---

## Installation

Thanks to npm, installing SmileysScript is easy as π.

Just run the following command in a NodeJS package!

`npm i --save-dev smileysscript`

## First File!

Now lets create our first SmileysScript file!  First, lets go create a `src` folder (if you haven't yet) and enter it!

Create a file named `helloWorld.😀`

That's right, all files in SmileysScript have a smile right in their filename!

:::note

If your computer doesn't like the emoji in the file name, using `.smiley` is a less fun alternative.

:::

Open up that file in your favorite text editor.

First we have to add the `😀` to the beginning of the program.  For now that is just the rule.  In the future it may become more useful.

Now add `😜 Hello 😜 World!`.  This will print out the words `Hello` and `World!` to the window.

Your file should now look like this:

`😀 😜 Hello 😜 World!`

Great Job!  You made your first SmileysScript Program!

## Compile and Run Your First File

Now we have to compile your file to JavaScript and execute it.  Go to the head of you NodeJS package and run:

`npx smileysscript`

This compiles all SmileysScript files in the input directory and puts the JavaScript files in the Output directory.  Since the input directory is `src` by default, you don't have to worry about changing it!

Now the file is compiled into JavaScript and stored in your `lib` directory, which is the default location.  Simply run `node lib/helloWorld.js` to run the compiled file!

## Continuing On

If you want more tutorials, continue on through the rest or the Getting Started and Advanced Usage sections.

If you want to see what the language has to offer, go to the [language reference](languageReference).
