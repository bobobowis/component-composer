
/* eslint-disable no-undef */
define(['superhero/core/schema/filter/integer/index'], function(SchemaFilterInteger)
{
  class SchemaFilterIntegerLocator
  {
    locate()
    {
      return new SchemaFilterInteger()
    }
  }

  return SchemaFilterIntegerLocator
})
