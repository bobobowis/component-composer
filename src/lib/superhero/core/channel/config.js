module.exports = {
  'core' :
  {
    // 'factories' :
    // {
    //   'core/channel' : {
    //     'composer' : 'core/schema/composer'
    //   }
    // },
    'schema' :
    {
      'composer' :
      {
        'core/channel/event-meta' : 'superhero/core/channel/schema/dto/event-meta',
        'core/channel/event'      : 'superhero/core/channel/schema/dto/event',
        'core/channel'            : 'superhero/core/channel/schema/entity/channel'
      }
    },
    'locator' :
    {
      // 'core/channel' : 'superhero/core/channel'
      'core/channel/factory' : 'superhero/core/channel/factory'
    }
  }
}
