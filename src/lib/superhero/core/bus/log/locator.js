/* eslint-disable no-undef */
define(['superhero/core/bus/log/index'], function(LogObserver)
{
  class LogObserverLocator
  {
    constructor(locator)
    {
      this.locator = locator
    }

    locate()
    {
      return new LogObserver()
    }
  }

  return LogObserverLocator
})
