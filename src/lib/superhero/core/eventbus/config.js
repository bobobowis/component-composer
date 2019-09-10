/* eslint-disable no-undef */
define(function()
{
  return {
    'core' :
    {
      'bootstrap' :
      {
        'eventbus' : 'core/eventbus/bootstrap'
      },
      'locator' :
      {
        'core/eventbus'           : 'superhero/core/eventbus',
        'core/eventbus/bootstrap' : 'superhero/core/eventbus/bootstrap'
      },
      'eventbus' :
      {
        'options'   : {},
        'observers' : {}
      }
    }
  }
})
