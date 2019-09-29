const
IncrementalIdGenerator  = require('.'),
LocatorConstituent      = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class IncrementalIdGeneratorLocator extends LocatorConstituent
{
  /**
   * @returns {IncrementalIdGenerator}
   */
  locate()
  {
    return IncrementalIdGenerator
  }
}

module.exports = IncrementalIdGeneratorLocator
