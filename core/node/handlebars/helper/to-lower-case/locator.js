const
CoreHandlebarsHelperToLowerCase = require('.'),
LocatorConstituent              = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperToLowerCaseLocator extends LocatorConstituent
{
  /**
   * @returns {CoreHandlebarsHelperToLowerCase}
   */
  locate()
  {
    return new CoreHandlebarsHelperToLowerCase()
  }
}

module.exports = CoreHandlebarsHelperToLowerCaseLocator
