const
CoreHandlebarsHelperMath  = require('.'),
LocatorConstituent        = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperMathLocator extends LocatorConstituent
{
  /**
   * @returns {CoreHandlebarsHelperMath}
   */
  locate()
  {
    return new CoreHandlebarsHelperMath()
  }
}

module.exports = CoreHandlebarsHelperMathLocator
