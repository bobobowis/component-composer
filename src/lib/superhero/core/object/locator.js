const CoreObject = require('.')

class CoreObjectLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return CoreObject
  }
}

module.exports = CoreObjectLocator
