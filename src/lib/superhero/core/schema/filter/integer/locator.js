
/* eslint-disable no-undef */
define(['require', 'superhero/core/schema/filter/integer/index'], function(require)
{
  const SchemaFilterInteger = require('superhero/core/schema/filter/integer/index')

  class SchemaFilterIntegerLocator
  {
    locate()
    {
      return new SchemaFilterInteger()
    }
  }

  return SchemaFilterIntegerLocator
})
