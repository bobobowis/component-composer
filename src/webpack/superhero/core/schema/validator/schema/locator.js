/* eslint-disable no-undef */
define(['superhero/core/schema/validator/schema/index'], function(SchemaValidatorSchema)
{
  class SchemaValidatorSchemaLocator
  {
    locate()
    {
      return new SchemaValidatorSchema()
    }
  }

  return SchemaValidatorSchemaLocator
})
