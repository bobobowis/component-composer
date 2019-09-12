/* eslint-disable no-undef */
define(function()
{
  return {
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
            'observers' : {}
          }
        }
      },
      'locator' :
      {
        'core/bus'           : 'superhero/core/bus/',
        'core/bus/factory'   : 'superhero/core/bus/factory',
        'core/bus/bootstrap' : 'superhero/core/bus/bootstrap'
      }
    }
  }
})
