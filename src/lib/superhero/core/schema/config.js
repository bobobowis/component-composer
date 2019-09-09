/* eslint-disable no-undef */
define(function()
{
  return {
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
        'core/schema/composer'            : 'superhero/core/composer',
        'core/schema/bootstrap'           : 'superhero/core/bootstrap',
        'core/schema/filter/boolean'      : 'superhero/core/schema/filter/boolean',
        'core/schema/filter/csv'          : 'superhero/core/schema/filter/csv',
        'core/schema/filter/decimal'      : 'superhero/core/schema/filter/decimal',
        'core/schema/filter/integer'      : 'superhero/core/schema/filter/integer',
        'core/schema/filter/json'         : 'superhero/core/schema/filter/json',
        'core/schema/filter/schema'       : 'superhero/core/schema/filter/schema',
        'core/schema/filter/string'       : 'superhero/core/schema/filter/string',
        'core/schema/filter/timestamp'    : 'superhero/core/schema/filter/timestamp',
        'core/schema/validator/boolean'   : 'superhero/core/schema/validator/boolean',
        'core/schema/validator/csv'       : 'superhero/core/schema/validator/csv',
        'core/schema/validator/decimal'   : 'superhero/core/schema/validator/decimal',
        'core/schema/validator/integer'   : 'superhero/core/schema/validator/integer',
        'core/schema/validator/json'      : 'superhero/core/schema/validator/json',
        'core/schema/validator/schema'    : 'superhero/core/schema/validator/schema',
        'core/schema/validator/string'    : 'superhero/core/schema/validator/string',
        'core/schema/validator/timestamp' : 'superhero/core/schema/validator/timestamp'
      }
    }
  }
})
