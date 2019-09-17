/* eslint-disable no-undef */

define(['superhero/core/bus/bootstrap/error/observer-contract-not-honered'], function(ObserverContractNotHoneredError)
{
  class BusBootstrap
  {
    constructor({
      configuration,
      locator
    })
    {
      this.configuration  = configuration
      this.locator        = locator
    }

    bootstrap()
    {
      const
      busFactory = this.locator.locate('core/bus/factory'),
      bus        = busFactory.create(),
      channels   = this.configuration.find('core.bus.channels')


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
      }

      this.locator.set('core/bus', bus)
    }
  }

  return BusBootstrap
})
