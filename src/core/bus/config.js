module.exports = {
  'core' :
  {
    // 'factories' :
    // {
    //   'core/bus' : {
    //     'busChannelFactory'       : 'core/channel/factory',
    //     'associativeArrayFactory' : 'data-structure/associative-array/factory'
    //   }
    // },
    'bootstrap' :
    {
      'bus' : 'core/bus/bootstrap'
    },
    'bus' :
    {
      'options'  : {},
      'channels' :
      {
        'events' : {
          'observers' : {
            'logged' : { 'core/bus/log': true }
          }
        }
      }
    },
    'schema' :
    {
      'composer' :
      {
        'core/bus' : `${__dirname}/schema/entity/bus`
      }
    },
    'locator' :
    {
      // 'core/bus'           : __dirname,
      'core/bus/factory'   : `${__dirname}/factory`,
      'core/bus/bootstrap' : `${__dirname}/bootstrap`,
      'core/bus/log'       : `${__dirname}/log`
    }
  }
}
