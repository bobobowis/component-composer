/* eslint-disable no-undef */
define(['superhero/core/schema/validator/decimal/index'], function(SchemaValidatorDecimal)
{
  class SchemaValidatorDecimalLocator
  {
    locate()
    {
      return new SchemaValidatorDecimal()
    }
  }

  return SchemaValidatorDecimalLocator
})
