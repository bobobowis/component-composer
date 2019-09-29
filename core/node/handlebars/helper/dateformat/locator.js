const
CoreHandlebarsHelperDateformat  = require('.'),
dateformat                      = require('dateformat'),
LocatorConstituent              = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperDateformatLocator extends LocatorConstituent
{
  /**
   * @returns {CoreHandlebarsHelperDateformat}
   */
  locate()
  {
    return new CoreHandlebarsHelperDateformat(dateformat)
  }
}

module.exports = CoreHandlebarsHelperDateformatLocator
