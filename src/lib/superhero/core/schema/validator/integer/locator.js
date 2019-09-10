/* eslint-disable no-undef */
define(['superhero/core/schema/validator/integer/index'], function(SchemaValidatorInteger)
{
  class SchemaValidatorIntegerLocator
  {
    locate()
    {
      return new SchemaValidatorInteger()
    }
  }

  return SchemaValidatorIntegerLocator
})
