const path = require('path')

module.exports = {
  mode   : 'production', /* Sets process.env.NODE_ENV on DefinePlugin to value production. Enables FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin and UglifyJsPlugin. */
  entry  : './src/index.js',
  output :
  {
    path     : path.join(__dirname, 'dist'),
    filename : 'index.js'
  },
  module : {
    rules : [
      {
        test   : /\.js$/,
        loader : 'babel-loader',
        query  :
        {
          presets : ['@babel/preset-env']
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
  plugins : [],
  devtool : 'source-map'
}
