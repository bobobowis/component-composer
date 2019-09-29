const StackFactory = require('.')

class StackFactoryLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {StackFactory}
   */
  locate()
  {
    const composer = this.locator.locate('core/schema/composer')
    return new StackFactory({
      composer
    })
  }
}

module.exports = StackFactoryLocator
