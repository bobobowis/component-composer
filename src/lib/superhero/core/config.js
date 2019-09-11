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
        'core/factory'           : 'superhero/core/factory',
        'core/factory/bootstrap' : 'superhero/core/factory/bootstrap'
      }
    }
  }
})
