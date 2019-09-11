/* eslint-disable no-undef */
define([
  'superhero/core/schema/validator/multiple-associative-array/index',
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
      const associateArrayValidator = this.locator.locate('core/schema/validator/associative-array')

      return new MultipleAssociativeArrayValidator(associateArrayValidator)
    }
  }

  return MultipleAssociativeArrayValidatorLocator
})
