const
LocatorConstituent  = require('superhero/core/locator/constituent'),
CustomJSONValidator = require('.')
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
    const locator = this.locator
    return new CustomJSONValidator(locator)
  }
}

module.exports = CustomJSONValidatorLocator
