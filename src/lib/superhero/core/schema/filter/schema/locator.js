
/* eslint-disable no-undef */
define(['require', 'superhero/core/schema/filter/schema/index'], function(require)
{
  const SchemaFilterSchema = require('superhero/core/schema/filter/schema/index')

  class SchemaFilterSchemaLocator
  {
    constructor(locator)
    {
      this.locator = locator
    }

    locate()
    {
      const composer = this.locator.locate('core/schema/composer')
      return new SchemaFilterSchema(composer)
    }
  }

  return SchemaFilterSchemaLocator
})
