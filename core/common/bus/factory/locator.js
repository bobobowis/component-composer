const BusFactory = require('.')

class BusFactoryLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new BusFactory({
      channelFactory          : this.locator.locate('core/channel/factory'),
      associativeArrayFactory : this.locator.locate('data-structure/associative-array/factory')
    })
  }
}

module.exports = BusFactoryLocator
