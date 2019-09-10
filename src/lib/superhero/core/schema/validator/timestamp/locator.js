/* eslint-disable no-undef */
define(['superhero/core/schema/validator/timestamp/index'], function(SchemaValidatorTimestamp)
{
  class SchemaValidatorTimestampLocator
  {
    locate()
    {
      return new SchemaValidatorTimestamp()
    }
  }

  return SchemaValidatorTimestampLocator
})
