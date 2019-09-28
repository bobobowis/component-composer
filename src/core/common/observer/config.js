const dirname =  __dirname || 'core/common/observer'

module.exports =
{
  'core' :
  {
    'locator' :
    {
      'core/observer/error'   : `${dirname}/error`,
      'core/observer/info'    : `${dirname}/info`,
      'core/observer/warning' : `${dirname}/warning`
    }
  }
}
