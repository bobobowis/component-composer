const
LocatorConstituent  = require('superhero/core/locator/constituent'),
BusBootstrap        = require('.')

class BusBootstrapLocator extends LocatorConstituent
{
  locate()
  {
    const
    configuration = this.locator.locate('core/configuration'),
    bus           = this.locator.locate('core/bus')

    return new BusBootstrap(configuration, bus, this.locator)
  }
}

module.exports = BusBootstrapLocator
