/* eslint-disable no-undef */
define(['superhero/core/bootstrap/index'], function(Bootstrap)
{
  class BootstrapLocator
  {
    constructor(locator)
    {
      this.locator = locator
    }

    locate()
    {
      return new Bootstrap(this.locator)
    }
  }

  return BootstrapLocator
})
