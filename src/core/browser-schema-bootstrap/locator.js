const SchemaBootstrap = require('.')

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

module.exports = SchemaBootstrapLocator
