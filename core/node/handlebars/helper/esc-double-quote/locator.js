const
CoreHandlebarsHelperEscDoubleQuote  = require('.'),
LocatorConstituent                  = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperEscDoubleQuoteLocator extends LocatorConstituent
{
  /**
   * @returns {CoreHandlebarsHelperEscDoubleQuote}
   */
  locate()
  {
    return new CoreHandlebarsHelperEscDoubleQuote()
  }
}

module.exports = CoreHandlebarsHelperEscDoubleQuoteLocator
