const CoreString = require('.')

class CoreStringLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new CoreString()
  }
}

module.exports = CoreStringLocator
