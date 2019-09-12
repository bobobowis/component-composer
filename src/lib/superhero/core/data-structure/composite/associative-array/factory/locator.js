/* eslint-disable no-undef */
define([
  'superhero/core/data-structure/composite/associative-array/factory/index',
  'superhero/core/locator/constituent'
], function(AssociativeArrayFactory, LocatorConstituent)
{
  /**
   * @extends {superhero/core/locator/constituent}
   */
  class AssociativeArrayFactoryLocator extends LocatorConstituent
  {
    /**
     * @returns {AssociativeArrayFactory}
     */
    locate()
    {
      return new AssociativeArrayFactory()
    }
  }

  return AssociativeArrayFactoryLocator
})
