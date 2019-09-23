const ObserverContractNotHoneredError = require('./error/observer-contract-not-honered')

class BusBootstrap
{
  constructor(configuration, bus, locator)
  {
    this.configuration  = configuration
    this.bus            = bus
    this.locator        = locator
  }

  bootstrap()
  {
    const channels = this.configuration.find('core.bus.channels')

    for(const channel in channels)
    {
      this.bus.addChannel(channel)

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

          this.bus.on({
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
