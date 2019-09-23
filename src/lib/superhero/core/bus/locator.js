const LocatorConstituent  = require('superhero/core/locator/constituent')

class BusLocator extends LocatorConstituent
{
  locate()
  {
    const busFactory = this.locator.locate('core/bus/factory')

    return busFactory.create()
  }
}

module.exports = BusLocator
