const ObserverContractNotHoneredError = require('./error/observer-contract-not-honered')

class EventbusBootstrap
{
  constructor({
    configuration,
    eventBusFactory,
    locator
  })
  {
    this.configuration      = configuration
    this.eventBusFactory  = eventBusFactory
    this.locator            = locator
  }

  bootstrap()
  {
    const
    eventbusConfig  = this.configuration.find(`core.eventbus`),
    consoleOptions  = eventbusConfig.options.console,
    eventbus        = this.eventBusFactory.create({
      consoleOptions
    }),
    observers       = eventbusConfig.observers

    for(const event in observers)
    {
      for(const observerPath in observers[event])
      {
        if(!observers[event][observerPath])
          continue

        const observer = this.locator.locate(observerPath)

        if(typeof observer.observe !== 'function')
          throw new ObserverContractNotHoneredError(`"${observerPath}" does not implement the BusObserver interface`)

        eventbus.on(event, observer.observe.bind(observer))
      }
    }

    this.locator.set('core/eventbus', eventbus)
  }
}

module.exports = EventbusBootstrap
