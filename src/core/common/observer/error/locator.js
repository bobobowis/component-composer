const ConsoleObserverError = require('.')

class ConsoleObserverErrorLocator
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
      prefix : 'ERR'
    })

    return new ConsoleObserverError(console)
  }
}

module.exports = ConsoleObserverErrorLocator
