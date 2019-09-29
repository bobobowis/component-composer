/**
 * @namespace Api
 */
module.exports =
{
  'core' :
  {
    'resource' :
    {
      'directory' : `${__dirname}/public`
    },
    'http' :
    {
      'server' :
      {
        'routes' :
        {
          'resource' :
          {
            'url'      : '/assets/.+',
            'method'   : 'get',
            'endpoint' : 'core/node/resource',
            'input'    : false
          },
          'home' :
          {
            'url'      : '/',
            'method'   : 'get',
            'endpoint' : 'api/endpoint/home',
            'view'     : 'core/handlebars',
            'template' : 'view/page/home/template',
            'input'    : false
          }
        }
      }
    }
  }
}
