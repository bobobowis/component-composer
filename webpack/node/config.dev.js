/*eslint-disable*/
const
common  = require('./config'),
path    = require('path'),
webpack = require('webpack')

module.exports = {
  ...common,
  mode  : 'development',
  output :
  {
    path     : path.resolve(__dirname, '../../app/node/dev'),
    filename : '[name].bundle.js'
  },
  devtool : 'source-map',
  plugins: common.plugins.concat([
    new webpack.EnvironmentPlugin({
      NODE_ENV : 'development',
      DEBUG    : true
    })
  ])
}
