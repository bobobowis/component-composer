const
AssociativeArray    = require('.'),
LocatorConstituent  = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class AssociativeArrayLocator extends LocatorConstituent
{
  /**
   * @returns {AssociativeArrayLocator}
   */
  locate()
  {
    return AssociativeArray
  }
}

module.exports = AssociativeArrayLocator
