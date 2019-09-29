const
HandlebarsHelperComponent = require('.'),
LocatorConstituent        = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class HandlebarsHelperComponentLocator extends LocatorConstituent
{
  /**
   * @returns {HandlebarsHelperComponent}
   */
  locate()
  {
    const
    fs    = require('fs'),
    hbs   = this.locator.locate('core/handlebars').handlebars,
    path  = this.locator.locate('core/path')

    return new HandlebarsHelperComponent({
      fs,
      hbs,
      path
    })
  }
}

module.exports = HandlebarsHelperComponentLocator
