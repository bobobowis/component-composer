const CustomJSONValidator = require('.')

class CustomJSONValidatorLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

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
