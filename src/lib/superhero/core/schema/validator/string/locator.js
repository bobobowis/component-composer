
/* eslint-disable no-undef */
define(['require', 'superhero/core/schema/validator/string/index'], function(require)
{
  const SchemaValidatorString = require('superhero/core/schema/validator/string/index')

  class SchemaValidatorStringLocator
  {
    locate()
    {
      return new SchemaValidatorString()
    }
  }

  return SchemaValidatorStringLocator
})

