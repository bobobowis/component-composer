/* eslint-disable*/
define(['require', 'superhero/core/schema/validator/schema/error/invalid'], function()
{
  const InvalidSchemaError = require('superhero/core/schema/validator/schema/error/invalid')

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

