// eslint-disable-next-line no-undef
define(['superhero/core/eventbus/bootstrap/index'], function(EventbusBootstrap)
{
  class EventbusBootstrapLocator
  {
    constructor(locator)
    {
      this.locator = locator
    }

    locate()
    {
      const
      configuration = this.locator.locate('core/configuration'),
      eventbus      = this.locator.locate('core/eventbus')

      return new EventbusBootstrap(configuration, eventbus, this.locator)
    }
  }

  return EventbusBootstrapLocator
})
