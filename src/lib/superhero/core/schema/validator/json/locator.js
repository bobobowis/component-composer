/* eslint-disable no-undef */
define(['require', 'superhero/core/schema/validator/json/index'], function(require)
{
  const SchemaValidatorJson = require('superhero/core/schema/validator/json/index')

  class SchemaValidatorJsonLocator
  {
    locate()
    {
      return new SchemaValidatorJson()
    }
  }

  return SchemaValidatorJsonLocator
})
