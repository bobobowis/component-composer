/* eslint-disable no-undef */
define([
  'superhero/core/data-structure/composite/multiple-associative-array/factory/index',
  'superhero/core/locator/constituent'
], function(MultipleAssociativeArrayFactory, LocatorConstituent)
{
  /**
   * @extends {superhero/core/locator/constituent}
   */
  class MultipleAssociativeArrayFactoryLocator extends LocatorConstituent
  {
    /**
     * @returns {MultipleAssociativeArrayFactory}
     */
    locate()
    {
      return new MultipleAssociativeArrayFactory()
    }
  }

  return MultipleAssociativeArrayFactoryLocator
})
