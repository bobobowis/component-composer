/* eslint-disable no-undef */
define(function()
{
  return {
    'id' : {
      'type'      : 'string',
      'not-empty' : true
    },
    'observers' :
    {
      'type' : 'data-structure/multiple-associative-array'
    }
  }
})
