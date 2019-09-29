const
CoreHandlebarsHelperJsonStringify = require('.'),
LocatorConstituent                = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperJsonStringifyLocator extends LocatorConstituent
{
  /**
   * @returns {CoreHandlebarsHelperJsonStringify}
   */
  locate()
  {
    return new CoreHandlebarsHelperJsonStringify()
  }
}

module.exports = CoreHandlebarsHelperJsonStringifyLocator
