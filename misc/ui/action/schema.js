/* eslint-disable no-undef */
define(function()
{
  return {
    'id' : {
      'type'      : 'string',
      'not-empty' : true,
      'optional'  : false
    },
    'emitter' : {
      'type'      : 'string',
      'not-empty' : true,
      'optional'  : false
    },
    'type' : {
      'type'      : 'string',
      'not-empty' : true,
      'optional'  : false
    },
    'payload' : {
      'type' : 'json'
    }
  }
})

