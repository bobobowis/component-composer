
/* eslint-disable no-undef */
define(['superhero/core/schema/filter/json/index'], function(SchemaFilterJson)
{
  class SchemaFilterJsonLocator
  {
    locate()
    {
      return new SchemaFilterJson()
    }
  }

  return SchemaFilterJsonLocator
})
