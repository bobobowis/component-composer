const
Dispatcher         = require('.'),
LocatorConstituent = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class DispatcherLocator extends LocatorConstituent
{
  /**
   * @returns {Dispatcher}
   */
  locate()
  {
    const
    store     = this.locator.locate('core/ui/store'),
    dtoMapper = this.locator.locate('core/ui/dto-mapper'),
    bus       = this.locator.locate('core/ui/bus'),
    channelId = 'DISPATCHER'


    return new Dispatcher({
      channelId,
      bus,
      store,
      dtoMapper
    })
  }
}

module.exports = DispatcherLocator
