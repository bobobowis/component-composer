/* eslint-disable no-undef */
define(['require', 'superhero/core/schema/validator/timestamp/index'], function(require)
{
  const SchemaValidatorTimestamp = require('superhero/core/schema/validator/timestamp/index')

  class SchemaValidatorTimestampLocator
  {
    locate()
    {
      return new SchemaValidatorTimestamp()
    }
  }

  return SchemaValidatorTimestampLocator
})
