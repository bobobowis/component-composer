const
App                = require('.'),
LocatorConstituent = require('superhero/core/locator/constituent')

/**
 * @extends {@superhero/core/locator/constituent}
 */
class AppLocator extends LocatorConstituent
{
  /**
   * @returns {App}
   */
  locate()
  {
    const
    store       = this.locator.locate('core/ui/store'),
    dtoMapper   = this.locator.locate('core/ui/dto-mapper'),
    rootReducer = this.locator.locate('core/ui/dto-mapper'),
    bus         = this.locator.locate('core/ui/bus'),
    dispatcher  = this.locator.locate('core/ui/dispatcher'),
    controllers = this.locator.locate('core/ui/controllers')

    return new App({
      store,
      dtoMapper,
      rootReducer,
      bus,
      dispatcher,
      controllers
    })
  }
}

module.exports = AppLocator
