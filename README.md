This is a sample project to setup a local kaluma project.

> All local files are from a kaluma cloud project (https://kaluma.io/@niklauslee/internet-clock).

## Setup a project folder

Create a project folder with the below files and directories.

```sh
my-local-project/
  kaluma_modules/    # third-party modules
  package.json       # project configuration
  index.js           # entry point
  webpack.config.js  # webpack configuration for bundling
```

## Download modules

Download modules in `dependencies` of `package.json` from `kaluma.io` and extract them into `kaluma_modules` as below folder structure.

> Please ensure that you are downloaded the correct version of the module from __Releases__ page for each module project.

```
kaluma_modules/
  @niklauslee/
    ssd1306-i2c/
    font-minimal/
    esp8266-http-client/
  @kaluma/
    logo-mono/
```

The downloaded modules could have it's dependencies, so the dependencies should be downloaded and extracted into `kaluma_modules` recursively.

## Setup Webpack

Install `webpack` and `webpack-cli`.

```sh
$ npm install webpack webpack-cli --save-dev
```

> Don't try `npm install`. It will try to install all modules in `dependencies` of `package.json` from NPM.

Edit `webpack.config.js` as below:

```js
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  resolve: {
    modules: [path.resolve(__dirname, 'kaluma_modules')]
  },
  /* kaluma builtin modules */
  externals: {
    'events': 'commonjs events',
    'gpio': 'commonjs gpio',
    'led': 'commonjs led',
    'button': 'commonjs button',
    'pwm': 'commonjs pwm',
    'adc': 'commonjs adc',
    'i2c': 'commonjs i2c',
    'spi': 'commonjs spi',
    'uart': 'commonjs uart',
    'rp2': 'commonjs rp2',
    'graphics': 'commonjs graphics',
    'at': 'commonjs at',
    'stream': 'commonjs stream',
    'net': 'commonjs net',
    'dgram': 'commonjs dgram',
    'http': 'commonjs http',
    'wifi': 'commonjs wifi',
    'url': 'commonjs url',
  },
  devtool: 'source-map'
};
```

## Bundle

Bundle all files into a single `bundle.js` file (with a source-map `bundlejs.map`).

```sh
$ npx webpack
```

## Upload

If you installed [Kaluma CLI](https://github.com/kaluma-project/kaluma-cli), you can upload the bundled file via serial port.

```sh
$ kaluma write bundle.js -p <port>
```
