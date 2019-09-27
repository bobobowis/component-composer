const DeepFreeze = require('.')

class DeepFreezeLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new DeepFreeze()
  }
}

module.exports = DeepFreezeLocator
