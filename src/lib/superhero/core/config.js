/* eslint-disable no-undef */
define(function()
{
  return {
    'core' :
    {
      'factories' : // GENERIC FACTORIES
      {
        'data-structure/multiple-associative-array' : {},
        'data-structure/associative-array'          : {}
      },
      'bootstrap' :
      {
        'factory' : 'factory/bootstrap'
      },
      'schema' :
      {
        'composer' :
        {
          'data-structure/multiple-associative-array' : 'superhero/core/data-structure/schema/value-object/multiple-associative-array/index',
          'data-structure/associative-array'          : 'superhero/core/data-structure/schema/value-object/associative-array/index'
        },
        'validator' :
        {
          'data-structure/collection'                 : 'core/schema/validator/data-structure/collection',
          'data-structure/custom-json'                : 'core/schema/validator/data-structure/custom-json',
          'data-structure/associative-array'          : 'core/schema/validator/data-structure/associative-array',
          'data-structure/multiple-associative-array' : 'core/schema/validator/data-structure/multiple-associative-array'
        }
      },
      'locator' :
      {
        'core/deep-assign'                                                : 'superhero/core/deep-assign',
        // VALIDATORS
        'core/schema/validator/data-structure/collection'                 : 'superhero/core/data-structure/schema/value-object/collection/validator',
        'core/schema/validator/data-structure/custom-json'                : 'superhero/core/data-structure/schema/value-object/custom-json/validator',
        'core/schema/validator/data-structure/associative-array'          : 'superhero/core/data-structure/schema/value-object/associative-array/validator',
        'core/schema/validator/data-structure/multiple-associative-array' : 'superhero/core/data-structure/schema/value-object/multiple-associative-array/validator',
        // DATA-STRUCTURES
        'data-structure/associative-array'                                : 'superhero/core/data-structure/associative-array',
        'data-structure/multiple-associative-array'                       : 'superhero/core/data-structure/multiple-associative-array',
        // FACTORY
        'factory'                                                         : 'superhero/core/factory',
        'factory/bootstrap'                                               : 'superhero/core/factory/bootstrap'
      }
    }
  }
})
