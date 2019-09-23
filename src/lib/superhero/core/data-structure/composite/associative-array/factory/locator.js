const
AssociativeArrayFactory = require('.'),
LocatorConstituent      = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class AssociativeArrayFactoryLocator extends LocatorConstituent
{
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
