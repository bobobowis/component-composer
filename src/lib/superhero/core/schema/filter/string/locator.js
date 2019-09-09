
/* eslint-disable no-undef */
define(['require', 'superhero/core/schema/filter/string/index'], function(require)
{
  const SchemaFilterString = require('superhero/core/schema/filter/string/index')

  class SchemaFilterStringLocator
  {
    locate()
    {
      return new SchemaFilterString()
    }
  }

  return SchemaFilterStringLocator
})
