const Factory = require('.')

class FactoryLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {Factory}
   */
  locate()
  {
    return Factory
  }
}

module.exports = FactoryLocator
