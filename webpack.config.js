'use strict';
var webpack = require('webpack')
var path = require('path')

var plugins = [];

if(!process.env.NODE_ENV) {
  plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  );
  process.env.NODE_ENV = 'production';
}

console.log("Build mode is set to: ", process.env.NODE_ENV);

if(process.env.NODE_ENV == 'production') {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
  console.info("* plugin: UglifyJsPlugin");
}

module.exports = {
  entry: [
    './index'
  ],
  output: {
    path: path.join(__dirname, 'public/dist/'),
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  },
  plugins: plugins
}