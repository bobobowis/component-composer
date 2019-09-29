const
CoreHandlebarsBootstrap = require('.'),
LocatorConstituent      = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class CoreHandlebarsBootstrapLocator extends LocatorConstituent
{
  /**
   * @returns {CoreHandlebarsBootstrap}
   */
  locate()
  {
    return new CoreHandlebarsBootstrap(this.locator)
  }
}

module.exports = CoreHandlebarsBootstrapLocator
