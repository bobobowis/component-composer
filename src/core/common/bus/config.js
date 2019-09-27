const dirname = __dirname || 'core/common/bus'

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
        'domain-events' : {
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
        'core/bus' : `${dirname}/schema/entity/bus`
      }
    },
    'locator' :
    {
      'core/bus/factory'   : `${dirname}/factory`,
      'core/bus/bootstrap' : `${dirname}/bootstrap`,
      'core/bus/log'       : `${dirname}/log`
    }
  }
}
