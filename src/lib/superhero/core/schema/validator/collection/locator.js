const
ArrayValidator      = require('.'),
LocatorConstituent  = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class ArrayValidatorLocator extends LocatorConstituent
{
  /**
   * @returns {ArrayValidator}
   */
  locate()
  {
    return new ArrayValidator({
      locator : this.locator
    })
  }
}

module.exports = ArrayValidatorLocator
