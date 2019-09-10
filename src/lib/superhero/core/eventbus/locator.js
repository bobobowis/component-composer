/* eslint-disable no-undef */
define(['superhero/core/eventbus'], function(Eventbus)
{
  class EventbusLocator
  {
    constructor(locator)
    {
      this.locator = locator
    }

    locate()
    {
      const
      configuration   = this.locator.locate('core/configuration'),
      eventbusOptions = configuration.find('core.eventbus.options'),
      observers       = configuration.find('core.eventbus.observers'),
      observersKeys   = Object.keys(observers || {}),
      eventbus        = new Eventbus(eventbusOptions, observersKeys)

      return eventbus
    }
  }

  return EventbusLocator
})
