/* eslint-disable no-undef */
define([
  'superhero/core/channel/index',
  'superhero/core/locator/constituent'
], function(BusChannel, LocatorConstituent)
{
  /**
   * @extends {superhero/core/locator/constituent}
   */
  class BusChannelLocator extends LocatorConstituent
  {
    /**
     * @returns {BusChannel}
     */
    locate()
    {
      return BusChannel
    }
  }

  return BusChannelLocator
})
