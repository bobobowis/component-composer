/* eslint-disable no-undef */
define(['require', 'superhero/core/bootstrap/index'], function(require)
{
  const Bootstrap = require('superhero/core/bootstrap/index')

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
