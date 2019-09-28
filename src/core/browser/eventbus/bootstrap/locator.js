const EventBusBootstrap = require('.')

class EventBusBootstrapLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration     = this.locator.locate('core/configuration'),
    busChannelFactory = this.locator.locate('core/channel/factory')

    return new EventBusBootstrap({
      configuration,
      busChannelFactory,
      locator : this.locator
    })
  }
}

module.exports = EventBusBootstrapLocator
