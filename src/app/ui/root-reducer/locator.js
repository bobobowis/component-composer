const
RootReducer        = require('.'),
LocatorConstituent = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class RootReducerLocator extends LocatorConstituent
{
  /**
   * @returns {RootReducer}
   */
  locate()
  {
    const
    dtoMapper  = this.locator.locate('core/ui/dto-mapper'),
    locator    = this.locator

    return new RootReducer({
      locator,
      dtoMapper
    })
  }
}

module.exports = RootReducerLocator
