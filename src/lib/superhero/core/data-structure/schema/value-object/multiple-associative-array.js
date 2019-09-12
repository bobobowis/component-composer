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
    'items' :
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

