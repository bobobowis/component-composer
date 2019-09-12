
/* eslint-disable no-undef */
define(['superhero/core/schema/validator/boolean/index'], function(SchemaValidatorBoolean)
{
  class SchemaValidatorBooleanLocator
  {
    locate()
    {
      return new SchemaValidatorBoolean()
    }
  }

  return SchemaValidatorBooleanLocator
})

