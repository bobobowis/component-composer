const
CoreHandlebarsHelperToUpperCase = require('.'),
LocatorConstituent              = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperToUpperCaseLocator extends LocatorConstituent
{
  /**
   * @returns {CoreHandlebarsHelperToUpperCase}
   */
  locate()
  {
    return new CoreHandlebarsHelperToUpperCase()
  }
}

module.exports = CoreHandlebarsHelperToUpperCaseLocator
