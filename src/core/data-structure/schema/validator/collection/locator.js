const CollectionValidator = require('.')

class CollectionValidatorLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {CollectionValidator}
   */
  locate()
  {
    const locator = this.locator
    return new CollectionValidator(locator)
  }
}

module.exports = CollectionValidatorLocator
