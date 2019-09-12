/* eslint-disable no-undef */

define(['superhero/core/bus/bootstrap/error/observer-contract-not-honered'], function(ObserverContractNotHoneredError)
{
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
              channel,
              event,
              observer : observer.observe.bind(observer)
            })
          }
        }
      }
    }
  }

  return BusBootstrap
})
