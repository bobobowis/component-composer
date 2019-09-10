/* eslint-disable no-undef */
define([
  'superhero/core/bus-channel/factory',
  'superhero/core/locator/constituent'
], function(BusChannelFactory, LocatorConstituent)
{
  /**
   * @extends {superhero/core/locator/constituent}
   */
  class BusChannelFactoryLocator extends LocatorConstituent
  {
    /**
     * @returns {BusChannelFactory}
     */
    locate()
    {
      const
      composer                        = this.locator.locate('core/schema/composer'),
      multipleAssociativeArrayFactory = this.locator.locate('core/data-structure/multiple-associative-array/factory')

      return new BusChannelFactory({
        composer,
        multipleAssociativeArrayFactory
      })
    }
  }

  return BusChannelFactoryLocator
})
