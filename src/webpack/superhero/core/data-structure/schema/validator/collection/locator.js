/* eslint-disable no-undef */
define([
  'superhero/core/data-structure/schema/validator/collection/index',
  'superhero/core/locator/constituent'
], function(CollectionValidator, LocatorConstituent)
{
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

  return CollectionValidatorLocator
})
