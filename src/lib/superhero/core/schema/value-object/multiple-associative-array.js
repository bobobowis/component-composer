/* eslint-disable no-undef */
define(function()
{
  return {
    '@meta' :
    {
      'extends' : [
        'data-structure/associative-array'
      ]
    },
    'array' :
    {
      'type'        : 'custom-json',
      'custom-json' :
      {
        'type' : 'collection'
      },
      'default' : {}
    }
  }
})

