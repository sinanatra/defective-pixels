Defective Pixels
----------
This is a Node.js module that generates a specified number of pixels with random colors and positions, appends them to a specified container on the HTML page and saves the data on the local storage.

![pixels](https://user-images.githubusercontent.com/20107875/224479331-c0dff8af-39b3-46fd-87d3-8081a7c3cbe4.gif)

## Installation

To install this module in your Node.js project, you can use npm:

```sh
npm install generatepixels
```

## Usage

To use this module in your Node.js project, you can import it like this:

```javascript
import generatepixels from "defective-pixels"
```

Once you've imported the module, you can call the generatepixels function to generate the pixels by specifying the number of pixels to add the container in your HTML page:

```javascript
generatepixels(10, "container_id")
```

## Alternative:

Here's an example of how you might use this module in an HTML file, by just cloning the repository:

```
<html>
  <head>
    <title>Defective Pixels Example</title>
    <script src="index.js"></script>
  </head>
  <body>
    <div id="container"></div>
    <script>
      const containerId = 'container';
      const numberOfPixels = 10;
      generatepixels(numberOfPixels, containerId);
    </script>
  </body>
</html>
```

In this example, we import the generatepixels module and call the function to generate 10 pixels and append them to a container with the ID "container". You can adjust the number of pixels generated by changing the numberOfPixels argument.

## Functionality

### `generatepixels(numberOfPixels, containerId)`

This module provides a function, `generatepixels`, which generates a specified number of pixels with random colors and positions, and appends them to the container with the specified ID on the HTML page.

- `numberOfPixels`: The number of pixels to generate.
- `containerId`: The ID of the HTML container element to append the generated pixels to.


### Credits:

This module was inspired by Domitille Debret's [script](https://github.com/domitille-f451/defective-pixels).



