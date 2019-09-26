const CoreObject = require('.')

class CoreObjectLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const coreString = this.locator.locate('core/string')

    return new CoreObject(coreString)
  }
}

module.exports = CoreObjectLocator
