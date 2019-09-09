
/* eslint-disable no-undef */
define(['require', 'superhero/core/schema/filter/decimal/index'], function(require)
{
  const SchemaFilterDecimal = require('superhero/core/schema/filter/decimal/index')

  class SchemaFilterDecimalLocator
  {
    locate()
    {
      return new SchemaFilterDecimal()
    }
  }

  return SchemaFilterDecimalLocator
})
