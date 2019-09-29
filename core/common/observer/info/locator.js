const ConsoleObserverInfo = require('.')

class ConsoleObserverInfoLocator
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
      prefix : 'INF'
    })

    return new ConsoleObserverInfo(console)
  }
}

module.exports = ConsoleObserverInfoLocator
