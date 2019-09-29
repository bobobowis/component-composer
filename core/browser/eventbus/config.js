const dirname =  __dirname || 'core/browser/eventbus'

module.exports =
{
  'core' :
  {
    'bootstrap' :
    {
      'eventbus' : 'core/eventbus/bootstrap'
    },
    'locator' :
    {
      'core/eventbus/bootstrap' : `${dirname}/bootstrap`,
      'core/eventbus/factory'   : `${dirname}/factory`
    },
    'eventbus' :
    {
      'options' : {
        'console' :
        {
          'prefix' : 'WARN'
        }
      },
      'observers' :
      {
        'core.error'   : { 'core/observer/error': true },
        'core.warning' : { 'core/observer/warning': true },
        'core.info'    : { 'core/observer/info': true }
      }
    }
  }
}
