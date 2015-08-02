// Add WebPack to use the included CommonsChunkPlugin
var webpack = require('webpack');
var bower_dir = __dirname + '/bower_components';

var config = {
   addVendor: function (name, path) {
    this.resolve.alias[name] = path;
    this.module.noParse.push(path);
  },

  // We split the entry into two specific chunks. Our app and vendors. Vendors
  // specify that react should be part of that chunk
  entry: {
    app: process.env.NODE_ENV === 'production' ? ['./app/App.js'] : ['webpack/hot/dev-server', './app/App.js']
  },
  resolve: { alias: {} },

  // We add a plugin called CommonsChunkPlugin that will take the vendors chunk
  // and create a vendors.js file. As you can see the first argument matches the key
  // of the entry, "vendors"
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('app', null, false)
  ],
  output: {
    publicPath: '/',
    path: process.env.NODE_ENV === 'production' ? './dist' : './build',
    filename: 'bundle.js'
  },
  module: {
    noParse: [],
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader' }
    ]
  }
};


module.exports = config;

