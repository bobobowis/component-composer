/* eslint-disable no-undef */
define(['superhero/core/schema/validator/json/index'], function(SchemaValidatorJson)
{
  class SchemaValidatorJsonLocator
  {
    locate()
    {
      return new SchemaValidatorJson()
    }
  }

  return SchemaValidatorJsonLocator
})
