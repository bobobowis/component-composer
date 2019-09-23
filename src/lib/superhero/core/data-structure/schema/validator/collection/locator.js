const
LocatorConstituent  = require('superhero/core/locator/constituent'),
CollectionValidator = require('.')

/**
 * @extends {superhero/core/locator/constituent}
 */
class CollectionValidatorLocator extends LocatorConstituent
{
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
