const
path    = require('path'),
webpack = require('webpack')

module.exports = {
  mode  : 'production',
  entry :
  {
    'polyfills' : '@babel/polyfill',
    'index'     : path.join(__dirname, 'app/index.js')
  },
  output :
  {
    path     : path.join(__dirname, 'app/prod/[hash]'),
    filename : '[name].bundle.js'
  },
  resolve :
  {
    modules : ['node_modules'],
    alias   :
    {
      'src' : path.join(__dirname, 'src')
    }
  },

  module : {
    rules : [
      {
        test   : /\.js$/,
        loader : 'babel-loader',
        query  :
        {
          presets : [
            ['@babel/preset-env']
          ]
        }
      }
    ]
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
  optimization :
  {
    splitChunks :
    {
      chunks : 'all'
    }
  },
  target : 'web',
  node   : {
    __dirname : false
  },
  plugins : [
    new webpack.EnvironmentPlugin({
      NODE_ENV : 'production',
      DEBUG    : false
    }),
    new webpack.DefinePlugin({
      __dirname : false,
      VERSION   : '1.0.0'
    })
  ]
}
