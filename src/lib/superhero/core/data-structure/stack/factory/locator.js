/* eslint-disable no-undef */
define([
  'superhero/core/data-structure/stack/factory/index',
  'superhero/core/locator/constituent'
], function(StackFactory, LocatorConstituent)
{
  /**
   * @extends {superhero/core/locator/constituent}
   */
  class StackFactoryLocator extends LocatorConstituent
  {
    /**
     * @returns {StackFactory}
     */
    locate()
    {
      const composer = this.locator.locate('core/schema/composer')
      return new StackFactory({
        composer
      })
    }
  }

  return StackFactoryLocator
})
