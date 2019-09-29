const
Controllers        = require('.'),
LocatorConstituent = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class ControllersLocator extends LocatorConstituent
{
  /**
   * @returns {Controllers}
   */
  locate()
  {
    const
    dtoMapper = this.locator.locate('core/ui/dto-mapper'),
    bus       = this.locator.locate('core/ui/bus')

    return new Controllers({
      dtoMapper,
      bus
    })
  }
}

module.exports = ControllersLocator
