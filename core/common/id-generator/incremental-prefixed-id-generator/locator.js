const
IncrementalTypeIdGenerator  = require('.'),
LocatorConstituent          = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class IncrementalTypeIdGeneratorLocator extends LocatorConstituent
{
  /**
   * @returns {IncrementalTypeIdGenerator}
   */
  locate()
  {
    return IncrementalTypeIdGenerator
  }
}

module.exports = IncrementalTypeIdGeneratorLocator
