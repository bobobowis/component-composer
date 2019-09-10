/* eslint-disable no-undef */
define([
  'superhero/core/data-structure/schema/value-object/associative-array/validator/index',
  'superhero/core/locator/constituent'
], function(AssociativeArrayValidator, LocatorConstituent)
{
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

  return AssociativeArrayValidatorLocator
})
