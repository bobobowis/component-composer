
/* eslint-disable no-undef */
define(['superhero/core/schema/filter/schema/index'], function(SchemaFilterSchema)
{
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
