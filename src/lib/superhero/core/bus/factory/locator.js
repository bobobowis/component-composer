const
LocatorConstituent  = require('superhero/core/locator/constituent'),
BusFactory          = require('.')

class BusFactoryLocator extends LocatorConstituent
{
  locate()
  {
    return new BusFactory({
      channelFactory          : this.locator.locate('core/channel/factory'),
      associativeArrayFactory : this.locator.locate('data-structure/associative-array/factory')
    })
  }
}

module.exports = BusFactoryLocator
