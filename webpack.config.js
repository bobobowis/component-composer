/*eslint-disable*/
const
path            = require('path'),
UglifyJsPlugin  = require('uglifyjs-webpack-plugin')


module.exports = {
  mode  : 'production', /* Sets process.env.NODE_ENV on DefinePlugin to value production. Enables FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin and UglifyJsPlugin. */
  entry :
  {
    'polyfills'           : '@babel/polyfill',
    //layout
    'index'   : './src/ui/index.js',
    /* If needed, client-side js for each view must be added here. We use differents entries to reduce javascript size in views */
  },
  output :
  {
    path     : path.join(__dirname, 'webpacked'),
    filename : '[name].bundle.js'
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
  optimization: {
    minimizer: [new UglifyJsPlugin({ sourceMap : true })]
  },
  devtool : 'source-map'
}
