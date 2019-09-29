const
CoreHandlebarsHelperToFixed = require('.'),
LocatorConstituent          = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperToFixedLocator extends LocatorConstituent
{
  /**
   * @returns {CoreHandlebarsHelperToFixed}
   */
  locate()
  {
    return new CoreHandlebarsHelperToFixed()
  }
}

module.exports = CoreHandlebarsHelperToFixedLocator
