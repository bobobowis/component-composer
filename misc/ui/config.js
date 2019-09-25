/**
 * @namespace UI
 */
module.exports =
{
  'core' :
  {
    'schema' :
    {
      'composer' :
      {
        'ui/action' : 'ui/action/schema'
      }
    },
    'locator' :
    {
      'ui/templates'          : 'ui/templates',
      'ui/store'              : 'ui/store',
      'ui/controllers'        : 'ui/controllers',
      'ui/dto-mapper'         : 'ui/dto-mapper',
      'ui/bus'                : 'ui/bus',
      'ui/root-reducer'       : 'ui/root-reducer',
      'ui/hash-table/factory' : 'ui/hash-table',
      'ui/action/factory'     : 'ui/action',
      'ui/app'                : 'ui/app'
    }
  }
}
