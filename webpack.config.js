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