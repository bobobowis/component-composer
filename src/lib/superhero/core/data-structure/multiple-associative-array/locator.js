/* eslint-disable no-undef */
define([
  'superhero/core/data-structure/multiple-associative-array/index',
  'superhero/core/locator/constituent'
], function(MultipleAssociativeArray, LocatorConstituent)
{
  /**
   * @extends {superhero/core/locator/constituent}
   */
  class MultipleAssociativeArrayLocator extends LocatorConstituent
  {
    /**
     * @returns {MultipleAssociativeArrayLocator}
     */
    locate()
    {
      return MultipleAssociativeArray
    }
  }

  return MultipleAssociativeArrayLocator
})
