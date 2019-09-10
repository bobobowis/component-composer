/* eslint-disable no-undef */
define([
  'superhero/core/schema/validator/custom-json/index',
  'superhero/core/locator/constituent'
], function(CustomJSONValidator, LocatorConstituent)
{
  /**
   * @extends {superhero/core/locator/constituent}
   */
  class CustomJSONValidatorLocator extends LocatorConstituent
  {
    /**
     * @returns {CustomJSONValidator}
     */
    locate()
    {
      const locator = this.locator
      return new CustomJSONValidator(locator)
    }
  }

  return CustomJSONValidatorLocator
})
