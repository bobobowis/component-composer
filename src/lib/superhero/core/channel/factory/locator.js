const
BusChannelFactory   = require('.'),
LocatorConstituent  = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class BusChannelFactoryLocator extends LocatorConstituent
{
  /**
   * @returns {BusChannelFactory}
   */
  locate()
  {
    const
    composer                        = this.locator.locate('core/schema/composer'),
    multipleAssociativeArrayFactory = this.locator.locate('data-structure/multiple-associative-array/factory')

    return new BusChannelFactory({
      composer,
      multipleAssociativeArrayFactory
    })
  }
}

module.exports = BusChannelFactoryLocator
