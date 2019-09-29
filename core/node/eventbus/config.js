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
      'core/eventbus'           : __dirname,
      'core/eventbus/bootstrap' : `${__dirname}/bootstrap`
    },
    'eventbus' :
    {
      'options'   : {},
      'observers' :
      {
        'core.error'   : { 'core/observer/error': true },
        'core.warning' : { 'core/observer/warning': true },
        'core.info'    : { 'core/observer/info': true }
      }
    }
  }
}
