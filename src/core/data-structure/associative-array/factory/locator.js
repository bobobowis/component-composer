const AssociativeArrayFactory = require('.')


class AssociativeArrayFactoryLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {AssociativeArrayFactory}
   */
  locate()
  {
    const composer = this.locator.locate('core/schema/composer')

    return new AssociativeArrayFactory({
      composer
    })
  }
}

module.exports = AssociativeArrayFactoryLocator
