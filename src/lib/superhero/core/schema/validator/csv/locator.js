
/* eslint-disable no-undef */
define(['require', 'superhero/core/schema/validator/csv/index'], function(require)
{
  const SchemaValidatorCsv = require('superhero/core/schema/validator/csv/index')

  class SchemaValidatorCsvLocator
  {
    locate()
    {
      return new SchemaValidatorCsv()
    }
  }

  return SchemaValidatorCsvLocator
})

