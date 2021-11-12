/**
 * Example for display 128x32 via I2C
 */
 
const {SSD1306} = require('./index');
const font = require('@niklauslee/font-lee-sans');
const logo = require('@kaluma/logo-mono');

const {I2C} = require('i2c');
const i2c0 = new I2C(0);
const ssd1306 = new SSD1306();

const options = {
  width: 128,
  height: 32,
  rstPin: 19,
  extVcc: false,
  rotation: 0
};

ssd1306.setup(i2c0, options).then(() => {
  var gc = ssd1306.getContext();
  var t = 3000;

  // start
  setTimeout(function () {
    gc.clearScreen();
    gc.setFontColor(1);
    gc.drawText(0, 0, "Graphics Examples");
    gc.display();
  }, t * 0);

  // pixels
  setTimeout(function () {
    gc.clearScreen();
    for (var x = 0; x < gc.getWidth(); x += 5) {
      for (var y = 0; y < gc.getHeight(); y += 5) {
        gc.setPixel(x, y, 1);
      }
    }
    gc.display();
  }, t * 1);

  // lines
  setTimeout(function () {
    gc.clearScreen();
    gc.setColor(1);
    for (var x = 0; x < gc.getWidth(); x += 5) {
      gc.drawLine(0, 0, x, gc.getHeight() - 1);
      gc.drawLine(gc.getWidth() - 1, 0, x, gc.getHeight() - 1);
    }
    gc.display();
  }, t * 2);

  // rectangles
  setTimeout(function () {
    gc.clearScreen();
    gc.setColor(1);
    for (var x = 0; x < gc.getWidth(); x += 5) {
      if ((x * 2) < Math.min(gc.getHeight(), gc.getWidth())) {
        gc.drawRect(x, x, gc.getWidth() - (x * 2), gc.getHeight() - (x * 2));
      }
    }
    gc.display();
  }, t * 3);

  // filled rectangles
  setTimeout(function () {
    gc.clearScreen();
    gc.setFillColor(1);
    for (var x = 0; x < gc.getWidth(); x += 10) {
      for (var y = 0; y < gc.getWidth(); y += 10) {
        if ((((x + y) / 10) % 2) === 0) {
          gc.fillRect(x, y, 10, 10);
        }
      }
    }
    gc.display();
  }, t * 4);

  // circles
  setTimeout(function () {
    gc.clearScreen();
    gc.setFillColor(1);
    for (var x = 0; x < gc.getWidth(); x += 30) {
      for (var y = 0; y < gc.getWidth(); y += 30) {
        gc.drawCircle(x + 15, y + 15, 14);
        gc.fillCircle(x + 15, y + 15, 8);
      }
    }
    gc.display();
  }, t * 5);

  // round rectangles
  setTimeout(function () {
    gc.clearScreen();
    gc.setFillColor(1);
    for (var x = 0; x < gc.getWidth(); x += 30) {
      for (var y = 0; y < gc.getWidth(); y += 20) {
        gc.drawRoundRect(x, y, 28, 18, 5);
        gc.fillRoundRect(x + 3, y + 3, 22, 12, 4);
      }
    }
    gc.display();
  }, t * 6);

  // font
  setTimeout(function () {
    gc.clearScreen();
    gc.setFontColor(1);
    gc.drawText(0, 0, "ABCDEFGHIJKLMN\nOPQRSTUVWXYZ\nabcdefghijklmn\nopqrstuvwxyz\n0123456789\n~!@#$%^&*()-=_+\n[]{}\\|:;'<>/?.,");
    gc.display();
  }, t * 7);

  // font scale
  setTimeout(function () {
    gc.clearScreen();
    gc.setFontColor(1);
    gc.setFontScale(3, 3);
    gc.drawText(0, 0, "ABCDEFGHIJKLMN\nOPQRSTUVWXYZ\nabcdefghijklmn\nopqrstuvwxyz\n0123456789\n~!@#$%^&*()-=_+\n[]{}\\|:;'<>/?.,");
    gc.display();
    gc.setFontScale(1, 1);
  }, t * 8);

  // custom font
  setTimeout(function () {
    gc.clearScreen();
    gc.setFontColor(1);
    gc.setFont(font);
    gc.setFontScale(1, 1);
    gc.drawText(0, 0, 'Custom Font\n"Lee Sans"\nVariable-width Font');
    gc.display();
  }, t * 9);

  // bitmap (logo)
  setTimeout(function () {
    gc.clearScreen();
    gc.setColor(1);
    var x = Math.floor((gc.getWidth() - logo.width) / 2);
    var y = Math.floor((gc.getHeight() - logo.height) / 2);
    gc.drawBitmap(x, y, logo);
    gc.display();
  }, t * 10);  
});
