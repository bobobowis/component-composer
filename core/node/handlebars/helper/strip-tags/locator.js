const
CoreHandlebarsHelperStripTags = require('.'),
LocatorConstituent            = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperStripTagsLocator extends LocatorConstituent
{
  /**
   * @returns {CoreHandlebarsHelperStripTags}
   */
  locate()
  {
    return new CoreHandlebarsHelperStripTags()
  }
}

module.exports = CoreHandlebarsHelperStripTagsLocator
