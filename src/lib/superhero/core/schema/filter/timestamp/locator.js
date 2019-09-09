
/* eslint-disable no-undef */
define(['require', 'superhero/core/schema/filter/timestamp/index'], function(require)
{
  const SchemaFilterTimestamp = require('superhero/core/schema/filter/timestamp/index')

  class SchemaFilterTimestampLocator
  {
    locate()
    {
      return new SchemaFilterTimestamp()
    }
  }

  return SchemaFilterTimestampLocator
})
