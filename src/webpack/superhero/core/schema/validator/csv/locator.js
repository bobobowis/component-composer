
/* eslint-disable no-undef */
define(['superhero/core/schema/validator/csv/index'], function(SchemaValidatorCsv)
{
  class SchemaValidatorCsvLocator
  {
    locate()
    {
      return new SchemaValidatorCsv()
    }
  }

  return SchemaValidatorCsvLocator
})

