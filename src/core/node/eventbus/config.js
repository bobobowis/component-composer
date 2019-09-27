module.exports =
{
  'bootstrap' :
  {
    'eventbus' : 'core/node/eventbus/bootstrap'
  },
  'locator' :
  {
    'core/node/eventbus'           : __dirname,
    'core/node/eventbus/bootstrap' : `${__dirname}/bootstrap`
  },
  'eventbus' :
  {
    'options'   : {},
    'observers' : {}
  }
}
