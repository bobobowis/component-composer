/* eslint-disable no-undef */
define(['superhero/core/bus/index'], function(Bus)
{
  class BusFactory
  {
    constructor({
      channelFactory,
      associativeArrayFactory
    })
    {
      this.channelFactory          = channelFactory
      this.associativeArrayFactory = associativeArrayFactory
    }

    createAssociativeArray()
    {
      return this.associativeArrayFactory.create()
    }

    create()
    {
      const bus = new Bus({
        channelFactory : this.channelFactory,
        channels       : this.createAssociativeArray()
      })

      return bus
    }
  }

  return BusFactory
})
