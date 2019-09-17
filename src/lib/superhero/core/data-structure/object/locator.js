/* eslint-disable no-undef */
define(['superhero/core/data-structure/object/index'], function(CoreObject)
{
  class CoreObjectLocator
  {
    constructor(locator)
    {
      this.locator = locator
    }

    locate()
    {
      return CoreObject
    }
  }

  return CoreObjectLocator
})
