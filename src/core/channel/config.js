const dirname = 'core/channel'

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
        'core/channel/event-meta' : `${dirname}/schema/dto/event-meta`,
        'core/channel/event'      : `${dirname}/schema/dto/event`,
        'core/channel'            : `${dirname}/schema/entity/channel`
      }
    },
    'locator' :
    {
      'core/channel/factory' : `${dirname}/factory`,
      'core/channel'         : dirname
    }
  }
}
