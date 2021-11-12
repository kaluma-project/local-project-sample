# Font Minimal

A minimal font (only 3x5 pixels).
 
## Example
 
Append `@niklauslee/font-minimal` module.
 
```js
var font = require('@niklauslee/minimal');
// get graphic context 'gc' from a driver (e.g. 'ssd1306')
gc.setFont(font);
gc.setFontScale(3, 3); // Enlarge font size to be readible.
gc.drawText(0, 0, "LOREM IPSUM DOLOR SIT AMET...");
gc.display();
```
 
## Glyph

![1582699277414.png](/api/photos/niklauslee/font-minimal/1582699277414.png)