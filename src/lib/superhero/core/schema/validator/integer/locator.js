/* eslint-disable no-undef */
define(['require', 'superhero/core/schema/validator/integer/index'], function(require)
{
  const SchemaValidatorInteger = require('superhero/core/schema/validator/integer/index')

  class SchemaValidatorIntegerLocator
  {
    locate()
    {
      return new SchemaValidatorInteger()
    }
  }

  return SchemaValidatorIntegerLocator
})
