/* eslint-disable no-undef */
define([
  'superhero/core/data-structure/multiple-associative-array/factory/index',
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
      const composer = this.locator.locate('core/schema/composer')

      return new MultipleAssociativeArrayFactory({
        composer
      })
    }
  }

  return MultipleAssociativeArrayFactoryLocator
})
