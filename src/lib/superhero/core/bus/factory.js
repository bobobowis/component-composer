define(['superhero/core/bus/index'],function(Bus)
{
  class BusFactory
  {
    constructor({
      busChannelFactory,
      associativeArrayFactory
    })
    {
      this.busChannelFactory       = busChannelFactory,
      this.associativeArrayFactory = associativeArrayFactory
    }

    createAssociativeArray()
    {
      return this.associativeArrayFactory.create()
    }

    create()
    {
      const bus = new Bus({
        busChannelFactory : this.busChannelFactory,
        channels          : this.createChannels(channels)
      })

      return bus
    }
}

  return BusFactory
})
