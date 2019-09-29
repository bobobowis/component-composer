const BusChannelFactory = require('.')

class BusChannelFactoryLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {BusChannelFactory}
   */
  locate()
  {
    const
    composer                        = this.locator.locate('core/schema/composer'),
    consoleFactory                  = this.locator.locate('core/console/factory'),
    multipleAssociativeArrayFactory = this.locator.locate('data-structure/multiple-associative-array/factory')

    return new BusChannelFactory({
      composer,
      consoleFactory,
      multipleAssociativeArrayFactory
    })
  }
}

module.exports = BusChannelFactoryLocator
