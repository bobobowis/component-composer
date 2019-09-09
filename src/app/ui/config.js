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
        'core/ui/action' : `${__dirname}/action/schema.js`
      }
    },
    'locator' :
    {
      'core/ui/templates'          : `${__dirname}/templates`,
      'core/ui/store'              : `${__dirname}/store`,
      'core/ui/controllers'        : `${__dirname}/controllers`,
      'core/ui/dto-mapper'         : `${__dirname}/dto-mapper`,
      'core/ui/bus'                : `${__dirname}/bus`,
      'core/ui/root-reducer'       : `${__dirname}/root-reducer`,
      'core/ui/hash-table/factory' : `${__dirname}/hash-table`,
      'core/ui/action/factory'     : `${__dirname}/action`,
      'core/ui/app'                : `${__dirname}/app`
    }
  }
}
