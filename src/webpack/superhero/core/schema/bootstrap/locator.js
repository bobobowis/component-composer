/* eslint-disable no-undef */
define(['superhero/core/schema/bootstrap/index'], function(SchemaBootstrap)
{
  class SchemaBootstrapLocator
  {
    constructor(locator)
    {
      this.locator = locator
    }

    locate()
    {
      const configuration = this.locator.locate('core/configuration')

      return new SchemaBootstrap(this.locator, configuration)
    }
  }

  return SchemaBootstrapLocator
})
