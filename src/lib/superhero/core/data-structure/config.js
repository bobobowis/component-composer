/* eslint-disable no-undef */
define(function()
{
  return {
    'core' :
    {
      // 'factories' :
      // {
      //   'core/data-structure/multiple-associative-array' : {
      //     'composer' : 'core/schema/composer'
      //   },
      //   'core/data-structure/associative-array' : {
      //     'composer' : 'core/schema/composer'
      //   }
      // },
      'schema' :
      {
        'composer' :
        {
          'data-structure/associative-array'          : 'superhero/core/data-structure/schema/value-object/associative-array',
          'data-structure/multiple-associative-array' : 'superhero/core/data-structure/schema/value-object/multiple-associative-array',
          'data-structure/queue'                      : 'superhero/core/data-structure/schema/value-object/queue',
          'data-structure/stack'                      : 'superhero/core/data-structure/schema/value-object/stack',
          'data-structure/node'                       : 'superhero/core/data-structure/schema/value-object/node',
          'data-structure/edge'                       : 'superhero/core/data-structure/schema/value-object/edge',
          'data-structure/graph'                      : 'superhero/core/data-structure/schema/value-object/graph',
          'data-structure/tree'                       : 'superhero/core/data-structure/schema/value-object/tree'
        },
        'validator' :
        {
          'collection'                                : 'core/schema/validator/collection',
          'custom-json'                               : 'core/schema/validator/custom-json',
          'data-structure/associative-array'          : 'core/schema/validator/data-structure/associative-array',
          'data-structure/multiple-associative-array' : 'core/schema/validator/data-structure/multiple-associative-array'
        }
      },
      'locator' :
      {
        'core/schema/validator/collection'                                : 'superhero/core/data-structure/schema/validator/collection',
        'core/schema/validator/custom-json'                               : 'superhero/core/data-structure/schema/validator/custom-json',
        'core/schema/validator/data-structure/associative-array'          : 'superhero/core/data-structure/schema/validator/associative-array',
        'core/schema/validator/data-structure/multiple-associative-array' : 'superhero/core/data-structure/schema/validator/multiple-associative-array',
        'data-structure/associative-array/factory'                        : 'superhero/core/data-structure/associative-array/factory',
        'data-structure/multiple-associative-array/factory'               : 'superhero/core/data-structure/multiple-associative-array/factory',
        'data-structure/queue/factory'                                    : 'superhero/core/data-structure/queue/factory',
        'data-structure/stack/factory'                                    : 'superhero/core/data-structure/stack/factory',
        'data-structure/graph/factory'                                    : 'superhero/core/data-structure/graph/factory',
        'data-structure/tree/factory'                                     : 'superhero/core/data-structure/tree/factory'
      }
    }
  }
})
