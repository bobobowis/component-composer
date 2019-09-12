/* eslint-disable no-undef */
define(['superhero/core/bus/index'], function(Bus)
{
  class BusLocator
  {
    constructor(locator)
    {
      this.locator = locator
    }

    locate()
    {
      const busFactory = this.locator.locate('core/bus/factory')

      return busFactory.create()
    }
  }

  return BusLocator
})
