const AssociativeArrayValidator = require('.')

class AssociativeArrayValidatorLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

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
