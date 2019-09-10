const
CustomJSONValidator = require('.'),
LocatorConstituent  = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class CustomJSONValidatorLocator extends LocatorConstituent
{
  /**
   * @returns {CustomJSONValidator}
   */
  locate()
  {
    return new CustomJSONValidator({
      locator : this.locator
    })
  }
}

module.exports = CustomJSONValidatorLocator
