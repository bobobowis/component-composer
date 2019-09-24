const MultipleAssociativeArrayFactory = require('.')

class MultipleAssociativeArrayFactoryLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {MultipleAssociativeArrayFactory}
   */
  locate()
  {
    const composer = this.locator.locate('core/schema/composer')

    return new MultipleAssociativeArrayFactory({
      composer
    })
  }
}

module.exports = MultipleAssociativeArrayFactoryLocator
