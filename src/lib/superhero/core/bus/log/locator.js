const
LocatorConstituent  = require('superhero/core/locator/constituent'),
LogObserver         = require('.')

class LogObserverLocator extends LocatorConstituent
{
  locate()
  {
    return new LogObserver()
  }
}

module.exports = LogObserverLocator
