/* eslint-disable no-undef */
define(['superhero/core/schema/filter/boolean/index'], function(SchemaFilterBoolean)
{
  class SchemaFilterBooleanLocator
  {
    locate()
    {
      return new SchemaFilterBoolean()
    }
  }

  return SchemaFilterBooleanLocator
})
