const DeepFind = require('.')

class DeepFindLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new DeepFind()
  }
}

module.exports = DeepFindLocator
