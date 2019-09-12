
/* eslint-disable no-undef */
define(['superhero/core/schema/filter/csv/index'], function(SchemaFilterCsv)
{
  class SchemaFilterCsvLocator
  {
    locate()
    {
      return new SchemaFilterCsv()
    }
  }

  return SchemaFilterCsvLocator
})
