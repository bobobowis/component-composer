const LocatorConstituent  = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class TemplatesLocator extends LocatorConstituent
{
  /**
   * @returns {Templates}
   */
  locate()
  {
    return window['component-composer'].views
  }
}

module.exports = TemplatesLocator
