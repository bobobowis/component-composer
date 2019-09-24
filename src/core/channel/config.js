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
        'core/channel/event-meta' : `${__dirname}/schema/dto/event-meta`,
        'core/channel/event'      : `${__dirname}/schema/dto/event`,
        'core/channel'            : `${__dirname}/schema/entity/channel`
      }
    },
    'locator' :
    {
      'core/channel/factory' : `${__dirname}/factory`,
      'core/channel'         : __dirname
    }
  }
}
