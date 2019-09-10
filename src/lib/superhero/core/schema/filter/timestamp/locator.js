
/* eslint-disable no-undef */
define(['superhero/core/schema/filter/timestamp/index'], function(SchemaFilterTimestamp)
{
  class SchemaFilterTimestampLocator
  {
    locate()
    {
      return new SchemaFilterTimestamp()
    }
  }

  return SchemaFilterTimestampLocator
})
