/* eslint-disable no-undef */
define(function()
{
  return {
    'core' :
    {
      'bootstrap' :
      {
        'bus' : 'superhero/core/bus/bootstrap'
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
      // 'factories' : 
      // {
      //   'core/bus/event'   : {},
      //   'core/bus/channel' : {
      //     'composer'  : 'core/schema/composer',
      //     'observers' : 'data-structure/multiple-associative-array'
      //   },
      //   'core/bus' : {
      //     'composer'       : 'core/schema/composer',
      //     'channelFactory' : 'core/bus/channel/factory'
      //   }
      // },
      'schema' :
      {
        'composer' : 
        {
          // 'core/bus/channel'    : 'superhero/core/bus/schema/entity/channel',
          'core/bus/event-meta' : 'superhero/core/bus/schema/dto/event-meta',
          'core/bus/event'      : 'superhero/core/bus/schema/dto/event'
        }
      },
      'locator' :
      {
        'core/bus'                 : 'superhero/core/bus/',
        'core/bus/channel'         : 'superhero/core/bus/channel',
        'core/bus/factory'         : 'superhero/core/bus/factory',
        'core/bus/channel/factory' : 'superhero/core/bus/channel/factory',
        'core/bus/bootstrap'       : 'superhero/core/bus/bootstrap'
      }
    }
  }
})
