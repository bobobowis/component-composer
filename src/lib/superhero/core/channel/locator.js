const
BusChannel          = require('.'),
LocatorConstituent  = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class BusChannelLocator extends LocatorConstituent
{
  /**
   * @returns {BusChannel}
   */
  locate()
  {
    return BusChannel
  }
}

module.exports = BusChannelLocator
