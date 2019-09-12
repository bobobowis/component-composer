/* eslint-disable no-undef */
define(['superhero/core/bus/factory/index'], function(BusFactory)
{
  class BusFactoryLocator
  {
    constructor(locator)
    {
      this.locator = locator
    }

    locate()
    {
      return new BusFactory({
        channelFactory          : this.locator.locate('core/channel/factory'),
        associativeArrayFactory : this.locator.locate('data-structure/associative-array/factory')
      })
    }
  }

  return BusFactoryLocator
})
