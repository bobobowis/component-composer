/*eslint-disable*/
const
path    = require('path'),
webpack = require('webpack')

module.exports = {
  entry :
  {
    polyfills : '@babel/polyfill',
    home      : path.resolve(__dirname, '../../dist/browser/core/browser/page/home')
  },
  resolve:
  {
    modules: ['node_modules'],
    alias:
    {
      'dist'  : path.resolve(__dirname, '../../dist/browser'),
      'core'  : path.resolve(__dirname, '../../dist/browser/core')
    }
  },
  module : {
    rules : [
      {
        test    : /\.js$/,
        loader  : 'babel-loader',
        options :
        {
          presets : [
            ['@babel/preset-env']
          ]
        //{
        //  "presets": [["minify", {
        //    "keepFnName": true
        //  }]]
        //}
        // // is the same as
        //{
        //  "presets": [["minify", {
        //    "mangle": {
        //      "keepFnName": true
        //     },
        //     "deadcode": {
        //      "keepFnName": true
        //     }
        //   }]]
        //}
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
  target : 'web',
  plugins: [
    new webpack.DefinePlugin({
      __dirname : false,
      VERSION   : '1.0.0'
    })
  ],
  node: {
    __dirname: true
  }
}
