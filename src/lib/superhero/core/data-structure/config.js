/* eslint-disable no-undef */
define(function()
{
  return {
    'core' :
    {
      // 'factories' :
      // {
      //   'data-structure/multiple-associative-array' : {},
      //   'data-structure/associative-array'          : {}
      // },
      'schema' :
      {
        'composer' :
        {
          'data-structure/associative-array'          : 'superhero/core/data-structure/schema/value-object/associative-array',
          'data-structure/multiple-associative-array' : 'superhero/core/data-structure/schema/value-object/multiple-associative-array'
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
        // 'data-structure/associative-array'                                : 'superhero/core/data-structure/composite/associative-array',
        // 'data-structure/multiple-associative-array'                       : 'superhero/core/data-structure/composite/multiple-associative-array'
        'core/data-structure/associative-array/factory'                   : 'superhero/core/data-structure/composite/associative-array/factory',
        'core/data-structure/multiple-associative-array/factory'          : 'superhero/core/data-structure/composite/multiple-associative-array/factory'
      }
    }
  }
})
