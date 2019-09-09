
/* eslint-disable no-undef */
define(['require', 'superhero/core/schema/filter/csv/index'], function(require)
{
  const SchemaFilterCsv = require('superhero/core/schema/filter/csv/index')

  class SchemaFilterCsvLocator
  {
    locate()
    {
      return new SchemaFilterCsv()
    }
  }

  return SchemaFilterCsvLocator
})
