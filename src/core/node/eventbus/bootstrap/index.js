const ObserverContractNotHoneredError = require('core/common/observer/error/observer-contract-not-honered')

class EventBusBootstrap
{
  constructor(configuration, eventbus, locator)
  {
    this.configuration  = configuration
    this.eventbus       = eventbus
    this.locator        = locator
  }

  bootstrap()
  {
    const observers = this.configuration.find('eventbus.observers')

    for(const event in observers)
    {
      for(const serviceName of observers[event])
      {
        const service = this.locator.locate(serviceName)

        if(typeof service.observe !== 'function')
          throw new ObserverContractNotHoneredError(`"${serviceName}" does not implement the EventBusObserver interface`)

        const observer = service.observe.bind(service)
        this.eventbus.on(event, observer)
      }
    }
  }
}

module.exports = EventBusBootstrap
