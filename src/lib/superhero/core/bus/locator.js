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
      return Bus
    }
  }

  return BusLocator
})
