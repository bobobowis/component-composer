const
Bus                = require('.'),
LocatorConstituent = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class BusLocator extends LocatorConstituent
{
  /**
   * @returns {Bus}
   */
  locate()
  {
    const
    busChannelFactory = this.locator.locate('core/ui/bus-channel/factory'),
    hashTableFactory  = this.locator.locate('core/ui/hash-table/factory'),
    channels          = hashTableFactory.create()

    return new Bus({
      busChannelFactory,
      channels
    })
  }
}

module.exports = BusLocator
