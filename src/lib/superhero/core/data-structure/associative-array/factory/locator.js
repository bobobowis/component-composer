/* eslint-disable no-undef */
define([
  'superhero/core/data-structure/associative-array/factory/index',
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
      const composer = this.locator.locate('core/schema/composer')

      return new AssociativeArrayFactory({
        composer
      })
    }
  }

  return AssociativeArrayFactoryLocator
})
