const BusChannel  = require('.')

class BusChannelLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {BusChannel}
   */
  locate()
  {
    return BusChannel
  }
}

module.exports = BusChannelLocator
