/* eslint-disable no-undef */
define(['require', 'superhero/core/schema/bootstrap/index'], function(require)
{
  const SchemaBootstrap = require('superhero/core/bootstrap/index')

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
