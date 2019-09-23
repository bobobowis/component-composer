const
MultipleAssociativeArray  = require('.'),
LocatorConstituent        = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class MultipleAssociativeArrayLocator extends LocatorConstituent
{
  /**
   * @returns {MultipleAssociativeArrayLocator}
   */
  locate()
  {
    return MultipleAssociativeArray
  }
}

module.exports = MultipleAssociativeArrayLocator
