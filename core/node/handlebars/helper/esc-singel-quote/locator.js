const
CoreHandlebarsHelperEscSingelQuote  = require('.'),
LocatorConstituent                  = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperEscSingelQuoteLocator extends LocatorConstituent
{
  /**
   * @returns {CoreHandlebarsHelperEscSingelQuote}
   */
  locate()
  {
    return new CoreHandlebarsHelperEscSingelQuote()
  }
}

module.exports = CoreHandlebarsHelperEscSingelQuoteLocator
