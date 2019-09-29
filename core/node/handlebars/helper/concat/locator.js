const
CoreHandlebarsHelperConcat  = require('.'),
LocatorConstituent          = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperConcatLocator extends LocatorConstituent
{
  /**
   * @returns {CoreHandlebarsHelperConcat}
   */
  locate()
  {
    return new CoreHandlebarsHelperConcat()
  }
}

module.exports = CoreHandlebarsHelperConcatLocator
