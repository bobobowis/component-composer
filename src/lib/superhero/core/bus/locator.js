/* eslint-disable no-undef */
define(['superhero/core/bus/index'], function(Bus)
{
  class BusLocator
  {
    constructor(locator)
    {
      this.locator = locator
    }

    locate()
    {
      const
      // configuration   = this.locator.locate('core/configuration'),
      // eventbusOptions = configuration.find('core.eventbus.options'),
      // observers       = configuration.find('core.eventbus.observers'),
      // observersKeys   = Object.keys(observers || {}),
      busChannelFactory               = this.locator.locate('core/bus-channel/factory'),
      multipleAssociativeArrayFactory = this.locator.locate('core/multiple-associative-array/factory'),
      channels                        = multipleAssociativeArrayFactory.create(),
      bus                             = new Bus({
        busChannelFactory,
        channels
      })

      return bus
    }
  }

  return BusLocator
})
