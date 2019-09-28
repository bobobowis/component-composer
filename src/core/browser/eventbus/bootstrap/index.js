const ObserverContractNotHoneredError = require('./error/observer-contract-not-honered')

class EventbusBootstrap
{
  constructor({
    configuration,
    busChannelFactory,
    locator
  })
  {
    this.configuration      = configuration
    this.busChannelFactory  = busChannelFactory
    this.locator            = locator
  }

  bootstrap()
  {
    const
    eventbusConfig  = this.configuration.find(`core.eventbus`),
    consoleOptions  = eventbusConfig.options.console,
    eventbus        = this.busChannelFactory.create({
      id : 'eventbus',
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

        eventbus.on({
          observer : observer.observe.bind(observer),
          event
        })
      }
    }

    this.locator.set('core/eventbus', eventbus)
  }
}

module.exports = EventbusBootstrap
