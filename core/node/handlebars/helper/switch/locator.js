const
CoreHandlebarsHelperSwitch  = require('.'),
LocatorConstituent          = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperSwitchLocator extends LocatorConstituent
{
  /**
   * @returns {CoreHandlebarsHelperSwitch}
   */
  locate()
  {
    return new CoreHandlebarsHelperSwitch()
  }
}

module.exports = CoreHandlebarsHelperSwitchLocator
