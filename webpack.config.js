/**
 * Created by deepaksisodiya on 15/12/15.
 */

var webpack = require('webpack');

webpack({
  context: __dirname + '/src',
  entry: "./index",
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname + '/src'
      }
    ]
  }
}, function () {
  console.log('webpack callback');
});