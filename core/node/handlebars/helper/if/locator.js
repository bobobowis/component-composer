const
CoreHandlebarsHelperIf  = require('.'),
LocatorConstituent      = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperIfLocator extends LocatorConstituent
{
  /**
   * @returns {CoreHandlebarsHelperIf}
   */
  locate()
  {
    return new CoreHandlebarsHelperIf()
  }
}

module.exports = CoreHandlebarsHelperIfLocator
