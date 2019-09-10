const
BusChannelFactory  = require('./factory'),
LocatorConstituent = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class BusChannelFactoryLocator extends LocatorConstituent
{
  /**
   * @returns {BusChannel}
   */
  locate()
  {
    const actionFactory = this.locator.locate('ui/action/factory')

    return new BusChannelFactory({
      actionFactory
    })
  }
}

module.exports = BusChannelFactoryLocator
