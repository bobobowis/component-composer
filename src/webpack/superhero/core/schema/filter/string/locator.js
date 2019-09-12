
/* eslint-disable no-undef */
define(['superhero/core/schema/filter/string/index'], function(SchemaFilterString)
{
  class SchemaFilterStringLocator
  {
    locate()
    {
      return new SchemaFilterString()
    }
  }

  return SchemaFilterStringLocator
})
