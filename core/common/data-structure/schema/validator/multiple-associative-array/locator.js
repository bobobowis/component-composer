const MultipleAssociativeArrayValidator = require('.')

class MultipleAssociativeArrayValidatorLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

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
