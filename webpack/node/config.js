/*eslint-disable*/
const
path    = require('path'),
webpack = require('webpack')

module.exports = {
  entry :
  {
    index     : path.resolve(__dirname, '../../dist/node/core/node/app/index.js')
  },
  resolve:
  {
    modules: ['node_modules'],
    alias:
    {
      'dist'  : path.resolve(__dirname, '../../dist/node'),
      'core'  : path.resolve(__dirname, '../../dist/node/core')
    }
  },
  stats :
  {
    all          : true,
    assets       : true,
    modules      : true,
    maxModules   : 0,
    performance  : true,
    timings      : true,
    moduleTrace  : true,
    warnings     : true,
    errors       : true,
    errorDetails : true,
    colors       : true
  },
  optimization:
  {
    splitChunks:
    {
      chunks: 'all'
    }
  },
  target : 'node',
  plugins: [
    new webpack.DefinePlugin({
      __dirname : false,
      VERSION   : '1.0.0'
    })
  ]
}
