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
    bus       = this.locator.locate('core/ui/bus')

    bus.addChannel('STORE')

    return new Dispatcher({
      busChannel : this.bus.getChannel('STORE'),
      store,
      dtoMapper
    })
  }
}

module.exports = DispatcherLocator
