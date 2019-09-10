const Bus = require('.')

class BusFactory
{
  constructor({
    hashTableFactory,
    busChannelFactory
  })
  {
    this.hashTableFactory  = hashTableFactory
    this.busChannelFactory = busChannelFactory
  }

  createChannels()
  {
    return this.hashTableFactory.create()
  }

  create()
  {
    const
    busChannelFactory = this.busChannelFactory,
    channels          = this.createChannels()

    return new Bus({
      busChannelFactory,
      channels
    })
  }
}

module.exports = BusFactory
