
/* eslint-disable no-undef */
define(['require', 'superhero/core/schema/validator/boolean/index'], function(require)
{
  const SchemaValidatorBoolean = require('superhero/core/schema/validator/boolean/index')

  class SchemaValidatorBooleanLocator
  {
    locate()
    {
      return new SchemaValidatorBoolean()
    }
  }

  return SchemaValidatorBooleanLocator
})

