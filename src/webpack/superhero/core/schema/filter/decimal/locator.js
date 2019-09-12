
/* eslint-disable no-undef */
define(['superhero/core/schema/filter/decimal/index'], function(SchemaFilterDecimal)
{
  class SchemaFilterDecimalLocator
  {
    locate()
    {
      return new SchemaFilterDecimal()
    }
  }

  return SchemaFilterDecimalLocator
})
