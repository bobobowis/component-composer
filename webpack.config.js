/*eslint-disable*/
const
path            = require('path'),
UglifyJsPlugin  = require('uglifyjs-webpack-plugin')


module.exports = {
  mode  : 'production', /* Sets process.env.NODE_ENV on DefinePlugin to value production. Enables FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin and UglifyJsPlugin. */
  entry :
  {
    'polyfills' : '@babel/polyfill',
    //layout
    'index'     : path.join(__dirname, 'app/index.js'),
    /* If needed, client-side js for each view must be added here. We use differents entries to reduce javascript size in views */
  },
  output :
  {
    path     : path.join(__dirname, 'app/webpacked'),
    filename : '[name].bundle.js'
    // path: '/home/proj/cdn/assets/[hash]',
    // publicPath: 'https://cdn.example.com/assets/[hash]/'
  },
  resolve:
  {
    modules: ['node_modules'],
    alias  : {
      'src' : path.resolve(__dirname, 'src'),
    }
    // alias:
    // {
    //   "backbone": "lib/backbone-1.1.0",
    //   "jquery": "lib/jquery-1.10.2",
    //   "underscore": "lib/lodash.underscore-2.3.0",
    //   "jqueryUI": "lib/jquery-ui.min"
    // }
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
  // loaders: [
  //   { test: /underscore/, loader: 'exports?_' },
  //   { test: /backbone/, loader: 'exports?Backbone!imports?underscore,jquery' }
  // ],
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
    minimizer:
    [
      new UglifyJsPlugin({
        sourceMap : true
      })
    ],
    splitChunks:
    {
      chunks: 'all'
    }
  },
  devtool : 'source-map',
  node : {
    __dirname : false
  }
}
