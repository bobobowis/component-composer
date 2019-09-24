const
Store               = require('.'),
LocatorConstituent  = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class StoreLocator extends LocatorConstituent
{
  /**
   * @returns {Store}
   */
  locate()
  {
    const
    rootReducer = this.locator.locate('core/ui/root-reducer'),
    bus         = this.locator.locate('core/ui/bus'),
    deepclone   = this.locator.locate('core/deepclone'),
    channelId   = 'STORE'

    return new Store({
      rootReducer,
      deepclone,
      bus,
      channelId
    })
  }
}

module.exports = StoreLocator
