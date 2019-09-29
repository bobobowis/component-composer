/**
 * @namespace Api
 */
module.exports =
{
  'core' :
  {
    'http' :
    {
      'server' :
      {
        'routes' :
        {
          'create-calculation' :
          {
            'url'      : '/calculations',
            'method'   : 'post',
            'endpoint' : `test/api/endpoint/create-calculation`,
            'view'     : 'core/http/server/view/json',
            'input'    : false
          },
          'authentication' :
          {
            'middleware' :
            [
              'test/api/middleware/authentication'
            ]
          },
          'append-calculation' :
          {
            'url'      : '/calculations/:id',
            'method'   : 'put',
            'endpoint' : `test/api/endpoint/append-calculation`,
            'view'     : 'core/http/server/view/json',
            'input'    : 'entity/calculation'
          }
        }
      }
    },
    'eventbus' :
    {
      'observers' :
      {
        'calculation created'  : { 'api/observer/calculation-created/log': true },
        'calculation appended' : { 'api/observer/calculation-appended/log': true }
      }
    },
    'locator' :
    {
      'api/observer/calculation-created/log'  : `${__dirname}/observer/calculation-created/log`,
      'api/observer/calculation-appended/log' : `${__dirname}/observer/calculation-appended/log`
    }
  }
}
