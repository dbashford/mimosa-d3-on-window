mimosa-d3-on-window
===========

## Overview

This module will modify `d3.js` and add a line of code that attaches `d3` to the `window`.

### Why?

Some d3 projects expect d3 to be on the window. If using AMD/Require.js, d3 does not attach itself to the window.  Rather than introducing shims or hacks to attach it, this module tacks `window.d3 = d3` at the end of the file.  This allows you to continue pulling d3 in via, for instance, bower as the build tool is responsible for performing the update.

### Why not just update the code?

If you are using Bower to manage project dependencies, then updating those dependencies is a bad idea because they will just get overwritten.  This module does its work after Bower has pulled in dependencies.

For more information regarding Mimosa, see http://mimosa.io

## Usage

Add `'d3-on-window'` to your list of modules.  That's all!  Mimosa will install the module for you when you start `mimosa watch` or `mimosa build`.

## Functionality

This module will detect the `d3.js` file and update the code slightly to attach `d3` to `window`. It will detect if it is already attached to the `window` before updating the code.  If it is already attached to window, this module may be unnecessary, so this module will write to the console when it finds it has no work to do with the `d3.js` file.

## Default Config

```javascript
d3OnWindow: {
  libName: "d3.js",
  replace: /(}\(\);)$/
}
```

* `libName`: The name of your d3 file.
* `replace`: The regex to prepend `window.d3 =` to in `libName`