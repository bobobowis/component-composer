/*eslint-disable*/
const
common    = require('./config'),
path      = require('path'),
webpack   = require('webpack')

module.exports = {
  ...common,
  mode  : 'production',
  output :
  {
    path     : path.resolve(__dirname, '../../app/browser/prod'),
    filename : '[name].bundle.js'
  },
  plugins: common.plugins.concat([
    new webpack.EnvironmentPlugin({
      NODE_ENV : 'production',
      DEBUG    : false
    })
  ])
}
