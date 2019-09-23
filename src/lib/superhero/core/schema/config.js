const path = require('path')

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
      'core/schema/composer'            : path.join(__dirname, '/composer'),
      'core/schema/bootstrap'           : path.join(__dirname, '/bootstrap'),
      'core/schema/filter/boolean'      : path.join(__dirname, '/filter/boolean'),
      'core/schema/filter/csv'          : path.join(__dirname, '/filter/csv'),
      'core/schema/filter/decimal'      : path.join(__dirname, '/filter/decimal'),
      'core/schema/filter/integer'      : path.join(__dirname, '/filter/integer'),
      'core/schema/filter/json'         : path.join(__dirname, '/filter/json'),
      'core/schema/filter/schema'       : path.join(__dirname, '/filter/schema'),
      'core/schema/filter/string'       : path.join(__dirname, '/filter/string'),
      'core/schema/filter/timestamp'    : path.join(__dirname, '/filter/timestamp'),
      'core/schema/validator/boolean'   : path.join(__dirname, '/validator/boolean'),
      'core/schema/validator/csv'       : path.join(__dirname, '/validator/csv'),
      'core/schema/validator/decimal'   : path.join(__dirname, '/validator/decimal'),
      'core/schema/validator/integer'   : path.join(__dirname, '/validator/integer'),
      'core/schema/validator/json'      : path.join(__dirname, '/validator/json'),
      'core/schema/validator/schema'    : path.join(__dirname, '/validator/schema'),
      'core/schema/validator/string'    : path.join(__dirname, '/validator/string'),
      'core/schema/validator/timestamp' : path.join(__dirname, '/validator/timestamp')
    }
  }
}
