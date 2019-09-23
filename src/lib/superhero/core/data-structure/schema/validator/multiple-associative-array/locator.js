const
LocatorConstituent                = require('superhero/core/locator/constituent'),
MultipleAssociativeArrayValidator = require('.')
/**
 * @extends {superhero/core/locator/constituent}
 */
class MultipleAssociativeArrayValidatorLocator extends LocatorConstituent
{
  /**
   * @returns {MultipleAssociativeArrayValidator}
   */
  locate()
  {
    const associateArrayValidator = this.locator.locate('core/schema/validator/data-structure/associative-array')

    return new MultipleAssociativeArrayValidator(associateArrayValidator)
  }
}

module.exports = MultipleAssociativeArrayValidatorLocator
