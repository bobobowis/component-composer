const
CoreHandlebarsHelperUnless  = require('.'),
LocatorConstituent          = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperUnlessLocator extends LocatorConstituent
{
  /**
   * @returns {CoreHandlebarsHelperUnless}
   */
  locate()
  {
    const
    helperIf   = this.locator.locate('core/handlebars/helper/if'),
    helperIfFn = helperIf.create()

    return new CoreHandlebarsHelperUnless(helperIfFn)
  }
}

module.exports = CoreHandlebarsHelperUnlessLocator
