module.exports = {
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
        'data-structure/associative-array'          : `${__dirname}/schema/value-object/associative-array`,
        'data-structure/multiple-associative-array' : `${__dirname}/schema/value-object/multiple-associative-array`,
        'data-structure/queue'                      : `${__dirname}/schema/value-object/queue`,
        'data-structure/stack'                      : `${__dirname}/schema/value-object/stack`,
        'data-structure/edge'                       : `${__dirname}/schema/value-object/edge`,
        'data-structure/graph'                      : `${__dirname}/schema/value-object/graph`,
        'data-structure/node'                       : `${__dirname}/schema/value-object/node`,
        'data-structure/tree'                       : `${__dirname}/schema/value-object/tree`
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
      'core/schema/validator/collection'                                : `${__dirname}/schema/validator/collection`,
      'core/schema/validator/custom-json'                               : `${__dirname}/schema/validator/custom-json`,
      'core/schema/validator/data-structure/associative-array'          : `${__dirname}/schema/validator/associative-array`,
      'core/schema/validator/data-structure/multiple-associative-array' : `${__dirname}/schema/validator/multiple-associative-array`,
      'data-structure/associative-array/factory'                        : `${__dirname}/associative-array/factory`,
      'data-structure/multiple-associative-array/factory'               : `${__dirname}/multiple-associative-array/factory`,
      'data-structure/queue/factory'                                    : `${__dirname}/queue/factory`,
      'data-structure/stack/factory'                                    : `${__dirname}/stack/factory`,
      'data-structure/graph/factory'                                    : `${__dirname}/graph/factory`,
      'data-structure/tree/factory'                                     : `${__dirname}/tree/factory`
    }
  }
}
