/* eslint-disable no-undef */
define(['require', 'superhero/core/schema/filter/boolean/index'], function(require)
{
  const SchemaFilterBoolean = require('superhero/core/schema/filter/boolean/index')

  class SchemaFilterBooleanLocator
  {
    locate()
    {
      return new SchemaFilterBoolean()
    }
  }

  return SchemaFilterBooleanLocator
})
