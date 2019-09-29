const
UUIDV4Generator     = require('.'),
LocatorConstituent  = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class UUIDV4GeneratorLocator extends LocatorConstituent
{
  /**
   * @returns {UUIDV4Generator}
   */
  locate()
  {
    return UUIDV4Generator
  }
}

module.exports = UUIDV4GeneratorLocator
