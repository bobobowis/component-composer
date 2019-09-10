/* eslint-disable no-undef */
define([
  'superhero/core/data-structure/schema/value-object/multiple-associative-array/validator/index',
  'superhero/core/locator/constituent'
], function(MultipleAssociativeArrayValidator, LocatorConstituent)
{
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

  return MultipleAssociativeArrayValidatorLocator
})
