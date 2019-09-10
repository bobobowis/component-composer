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
      'type'        : 'data-structure/custom-json',
      'custom-json' :
      {
        'type' : 'data-structure/collection'
      },
      'default' : {}
    }
  }
})

