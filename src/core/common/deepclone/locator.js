const DeepClone = require('.')

class DeepCloneLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new DeepClone()
  }
}

module.exports = DeepCloneLocator
