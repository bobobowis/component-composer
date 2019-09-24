const BusBootstrap = require('.')

class BusBootstrapLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration = this.locator.locate('core/configuration'),
    busFactory    = this.locator.locate('core/bus/factory')

    return new BusBootstrap(configuration, busFactory, this.locator)
  }
}

module.exports = BusBootstrapLocator
