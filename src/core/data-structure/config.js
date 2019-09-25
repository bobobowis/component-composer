const dirname = 'core/data-structure'

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
        'data-structure/associative-array'          : `${dirname}/schema/value-object/associative-array`,
        'data-structure/multiple-associative-array' : `${dirname}/schema/value-object/multiple-associative-array`,
        'data-structure/queue'                      : `${dirname}/schema/value-object/queue`,
        'data-structure/stack'                      : `${dirname}/schema/value-object/stack`,
        'data-structure/edge'                       : `${dirname}/schema/value-object/edge`,
        'data-structure/graph'                      : `${dirname}/schema/value-object/graph`,
        'data-structure/node'                       : `${dirname}/schema/value-object/node`,
        'data-structure/tree'                       : `${dirname}/schema/value-object/tree`
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
      'core/schema/validator/collection'                                : `${dirname}/schema/validator/collection`,
      'core/schema/validator/custom-json'                               : `${dirname}/schema/validator/custom-json`,
      'core/schema/validator/data-structure/associative-array'          : `${dirname}/schema/validator/associative-array`,
      'core/schema/validator/data-structure/multiple-associative-array' : `${dirname}/schema/validator/multiple-associative-array`,
      'data-structure/associative-array/factory'                        : `${dirname}/associative-array/factory`,
      'data-structure/multiple-associative-array/factory'               : `${dirname}/multiple-associative-array/factory`,
      'data-structure/queue/factory'                                    : `${dirname}/queue/factory`,
      'data-structure/stack/factory'                                    : `${dirname}/stack/factory`,
      'data-structure/graph/factory'                                    : `${dirname}/graph/factory`,
      'data-structure/tree/factory'                                     : `${dirname}/tree/factory`
    }
  }
}
