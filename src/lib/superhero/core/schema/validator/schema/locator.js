/* eslint-disable no-undef */
define(['require', 'superhero/core/schema/validator/schema/index'], function(require)
{
  const SchemaValidatorSchema = require('superhero/core/schema/validator/schema/index')

  class SchemaValidatorSchemaLocator
  {
    locate()
    {
      return new SchemaValidatorSchema()
    }
  }

  return SchemaValidatorSchemaLocator
})
