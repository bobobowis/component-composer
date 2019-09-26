const LogObserver = require('.')

class LogObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    consoleFactory = this.locator.locate('core/console/factory'),
    logConsole     = consoleFactory.create()

    return new LogObserver(logConsole)
  }
}

module.exports = LogObserverLocator
