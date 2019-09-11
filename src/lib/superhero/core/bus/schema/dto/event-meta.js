/* eslint-disable no-undef */
define(function()
{
  return {
    'name' :
    {
      'type'      : 'string',
      'not-empty' : true
    },
    'emitter' :
    {
      'type'      : 'string',
      'not-empty' : true
    },
    'timestamp' :
    {
      'type' : 'timestamp'
    }
  }
})
