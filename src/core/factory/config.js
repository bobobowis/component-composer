/* eslint-disable no-undef */
define(function()
{
  return {
    'core' :
    {
      'bootstrap' :
      {
        'factory' : 'core/factory/bootstrap'
      },
      'locator' :
      {
        'core/factory'           : __dirname,
        'core/factory/bootstrap' : `${__dirname}/bootstrap`
      }
    }
  }
})
