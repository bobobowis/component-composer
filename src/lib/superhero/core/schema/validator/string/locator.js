
/* eslint-disable no-undef */
define(['superhero/core/schema/validator/string/index'], function(SchemaValidatorString)
{
  class SchemaValidatorStringLocator
  {
    locate()
    {
      return new SchemaValidatorString()
    }
  }

  return SchemaValidatorStringLocator
})

