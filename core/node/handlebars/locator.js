const
CoreHandlebars      = require('.'),
handlebars          = require('handlebars'),
LocatorConstituent  = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class CoreHandlebarsLocator extends LocatorConstituent
{
  /**
   * @returns {CoreHandlebars}
   */
  locate()
  {
    const path = this.locator.locate('core/path')
    return new CoreHandlebars(path, handlebars)
  }
}

module.exports = CoreHandlebarsLocator
