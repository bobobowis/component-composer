const
LocatorConstituent        = require('superhero/core/locator/constituent'),
AssociativeArrayValidator = require('.')
/**
 * @extends {superhero/core/locator/constituent}
 */
class AssociativeArrayValidatorLocator extends LocatorConstituent
{
  /**
   * @returns {AssociativeArrayValidator}
   */
  locate()
  {
    const locator = this.locator
    return new AssociativeArrayValidator(locator)
  }
}

module.exports = AssociativeArrayValidatorLocator
