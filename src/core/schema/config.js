const dirname = 'core/schema'

module.exports =
{
  'core' :
  {
    'bootstrap' :
    {
      'schema' : 'core/schema/bootstrap'
    },
    'schema' :
    {
      'filter' :
      {
        'boolean'   : 'core/schema/filter/boolean',
        'csv'       : 'core/schema/filter/csv',
        'decimal'   : 'core/schema/filter/decimal',
        'integer'   : 'core/schema/filter/integer',
        'json'      : 'core/schema/filter/json',
        'schema'    : 'core/schema/filter/schema',
        'string'    : 'core/schema/filter/string',
        'timestamp' : 'core/schema/filter/timestamp'
      },
      'validator' :
      {
        'boolean'   : 'core/schema/validator/boolean',
        'csv'       : 'core/schema/validator/csv',
        'decimal'   : 'core/schema/validator/decimal',
        'integer'   : 'core/schema/validator/integer',
        'json'      : 'core/schema/validator/json',
        'schema'    : 'core/schema/validator/schema',
        'string'    : 'core/schema/validator/string',
        'timestamp' : 'core/schema/validator/timestamp'
      }
    },
    'locator' :
    {
      'core/schema/composer'            : `${dirname}/composer`,
      'core/schema/bootstrap'           : `${dirname}/bootstrap`,
      'core/schema/filter/boolean'      : `${dirname}/filter/boolean`,
      'core/schema/filter/csv'          : `${dirname}/filter/csv`,
      'core/schema/filter/decimal'      : `${dirname}/filter/decimal`,
      'core/schema/filter/integer'      : `${dirname}/filter/integer`,
      'core/schema/filter/json'         : `${dirname}/filter/json`,
      'core/schema/filter/schema'       : `${dirname}/filter/schema`,
      'core/schema/filter/string'       : `${dirname}/filter/string`,
      'core/schema/filter/timestamp'    : `${dirname}/filter/timestamp`,
      'core/schema/validator/boolean'   : `${dirname}/validator/boolean`,
      'core/schema/validator/csv'       : `${dirname}/validator/csv`,
      'core/schema/validator/decimal'   : `${dirname}/validator/decimal`,
      'core/schema/validator/integer'   : `${dirname}/validator/integer`,
      'core/schema/validator/json'      : `${dirname}/validator/json`,
      'core/schema/validator/schema'    : `${dirname}/validator/schema`,
      'core/schema/validator/string'    : `${dirname}/validator/string`,
      'core/schema/validator/timestamp' : `${dirname}/validator/timestamp`
    }
  }
}
