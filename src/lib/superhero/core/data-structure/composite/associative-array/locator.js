/* eslint-disable no-undef */
define([
  'superhero/core/data-structure/associative-array/index',
  'superhero/core/locator/constituent'
], function(AssociativeArray, LocatorConstituent)
{
  /**
   * @extends {superhero/core/locator/constituent}
   */
  class AssociativeArrayLocator extends LocatorConstituent
  {
    /**
     * @returns {AssociativeArrayLocator}
     */
    locate()
    {
      return AssociativeArray
    }
  }

  return AssociativeArrayLocator
})
