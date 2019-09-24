const ObserverContractNotHoneredError = require('./error/observer-contract-not-honered')

class BusBootstrap
{
  constructor(configuration, busFactory, locator)
  {
    this.configuration  = configuration
    this.busFactory     = busFactory
    this.locator        = locator
  }

  bootstrap()
  {
    const
    channels = this.configuration.find('core.bus.channels'),
    bus      = this.busFactory.create()

    for(const channel in channels)
    {
      bus.addChannel(channel)

      const observers = this.configuration.find(`core.bus.channels.${channel}.observers`)

      for(const event in observers)
      {
        for(const observerPath in observers[event])
        {
          if(!observers[event][observerPath])
            continue

          const observer = this.locator.locate(observerPath)

          if(typeof observer.observe !== 'function')
            throw new ObserverContractNotHoneredError(`"${observerPath}" does not implement the BusObserver interface`)

          bus.on({
            channelId : channel,
            observer  : observer.observe.bind(observer),
            event
          })
        }
      }

      this.locator.set('core/bus', this.bus)
    }
  }
}

module.exports = BusBootstrap
