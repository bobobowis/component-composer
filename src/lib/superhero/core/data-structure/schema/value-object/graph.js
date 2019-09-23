/* eslint-disable no-undef */
define(function()
{
  return {
    'isDirected' :
    {
      'type' : 'boolean'
    },
    'nodes' :
    {
      'type'                           : 'data-structure/associative-array',
      'associative-array-type'         : 'schema',
      'associative-array-type-options' : {
        'schema' : 'data-structure/node'
      }
    },
    'edges' :
    {
      'type'                           : 'data-structure/multiple-associative-array',
      'associative-array-type-options' : {
        'array-type'         : 'schema',
        'array-type-options' : {
          'schema' : 'data-structure/edge'
        }
      }
    }
  }
})
