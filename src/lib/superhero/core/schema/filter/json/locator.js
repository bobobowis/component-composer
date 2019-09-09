
/* eslint-disable no-undef */
define(['require', 'superhero/core/schema/filter/json/index'], function(require)
{
  const SchemaFilterJson = require('superhero/core/schema/filter/json/index')

  class SchemaFilterJsonLocator
  {
    locate()
    {
      return new SchemaFilterJson()
    }
  }

  return SchemaFilterJsonLocator
})
