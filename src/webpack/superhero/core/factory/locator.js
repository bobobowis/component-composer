/* eslint-disable no-undef */
define([
  'superhero/core/factory/index',
  'superhero/core/locator/constituent'
], function(Factory, LocatorConstituent)
{
  /**
   * @extends {superhero/core/locator/constituent}
   */
  class FactoryLocator extends LocatorConstituent
  {
    /**
     * @returns {Factory}
     */
    locate()
    {
      return Factory
    }
  }

  return FactoryLocator
})
