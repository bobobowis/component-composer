const ConsoleObserverWarning = require('.')

class ConsoleObserverWarningLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    consoleFactory  = this.locator.locate('core/console/factory'),
    console         = consoleFactory.create({
      prefix : 'WARN'
    })

    return new ConsoleObserverWarning(console)
  }
}

module.exports = ConsoleObserverWarningLocator
