const MetricsObserver = require('.')

class MetricsObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    consoleFactory = this.locator.locate('core/console/factory'),
    logConsole     = consoleFactory.create({
      prefix     : 'METRICS',
      color      : 'Maroon',
      background : 'PaleGreen'
    })

    return new MetricsObserver(logConsole)
  }
}

module.exports = MetricsObserverLocator
