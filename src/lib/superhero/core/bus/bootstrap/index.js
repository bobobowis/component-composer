/* eslint-disable no-undef */

define(['superhero/core/eventbus/bootstrap/error/observer-contract-not-honered'], function(ObserverContractNotHoneredError)
{
  class EventbusBootstrap
  {
    constructor(configuration, eventbus, locator)
    {
      this.configuration  = configuration
      this.eventbus       = eventbus
      this.locator        = locator
    }

    bootstrap()
    {
      const observers = this.configuration.find('core.eventbus.observers')

      for(const event in observers)
      {
        for(const serviceName in observers[event])
        {
          if(!observers[event][serviceName])
            continue

          const service = this.locator.locate(serviceName)

          if(typeof service.observe !== 'function')
            throw new ObserverContractNotHoneredError(`"${serviceName}" does not implement the EventBusObserver interface`)

          const observer = service.observe.bind(service)
          this.eventbus.on(event, observer)
        }
      }
    }
  }

  return EventbusBootstrap
})
