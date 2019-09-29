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
    configuration   = this.locator.locate('core/configuration'),
    eventBusFactory = this.locator.locate('core/channel/factory')

    return new EventBusBootstrap({
      configuration,
      eventBusFactory,
      locator : this.locator
    })
  }
}

module.exports = EventBusBootstrapLocator
