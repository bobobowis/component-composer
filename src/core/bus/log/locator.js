const LogObserver = require('.')

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

module.exports = LogObserverLocator
