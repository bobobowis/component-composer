const
Stack               = require('.'),
LocatorConstituent  = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class StackLocator extends LocatorConstituent
{
  /**
   * @returns {Stack}
   */
  locate()
  {
    return Stack
  }
}

module.exports = StackLocator
