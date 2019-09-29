const
CoreHandlebarsHelperCase  = require('.'),
LocatorConstituent        = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperCaseLocator extends LocatorConstituent
{
  /**
   * @returns {CoreHandlebarsHelperCase}
   */
  locate()
  {
    return new CoreHandlebarsHelperCase()
  }
}

module.exports = CoreHandlebarsHelperCaseLocator
