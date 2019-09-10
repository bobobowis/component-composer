/* eslint-disable*/
define(['superhero/core/schema/validator/schema/error/invalid'], function(InvalidSchemaError)
{
  /**
   * @implements {SchemaValidator}
   */
  class SchemaValidatorSchema
  {
    valid(options, data)
    {
      // nothing to validate
    }
  }

  return SchemaValidatorSchema
})

