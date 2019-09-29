const
CoreHandlebarsHelperCalculate = require('.'),
LocatorConstituent            = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperCalculateLocator extends LocatorConstituent
{
  /**
   * @returns {CoreHandlebarsHelperCalculate}
   */
  locate()
  {
    return new CoreHandlebarsHelperCalculate()
  }
}

module.exports = CoreHandlebarsHelperCalculateLocator
