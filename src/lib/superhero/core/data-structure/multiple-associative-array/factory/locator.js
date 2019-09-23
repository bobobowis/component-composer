const
MultipleAssociativeArrayFactory = require('.'),
LocatorConstituent              = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class MultipleAssociativeArrayFactoryLocator extends LocatorConstituent
{
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
