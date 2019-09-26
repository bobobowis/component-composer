/*eslint-disable*/
const
path    = require('path'),
webpack = require('webpack')

module.exports = {
  mode  : 'development',
  entry :
  {
    polyfills : '@babel/polyfill',
    index     : path.join(__dirname, 'app/index.js')
  },
  output :
  {
    path     : path.join(__dirname, 'app/dev'),
    filename : '[name].bundle.js'
  },
  resolve:
  {
    modules: ['node_modules'],
    alias:
    {
      src : path.join(__dirname, 'src')
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
  optimization:
  {
    splitChunks:
    {
      chunks: 'all'
    }
  },
  devtool : 'source-map',
  target  : 'web',
  node: {
    __dirname: true
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV : 'development',
      DEBUG    : true
    }),
    new webpack.DefinePlugin({
      __dirname : false,
      VERSION   : '1.0.0'
    })
  ]
}
