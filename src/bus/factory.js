const
HashTable         = require('../hash-table'),
BusChannelFactory = require('./bus-channel/factory')
Bus               = require('.')

class BusFactory
{
  createChannels()
  {
    return new HashTable()
  }

  createBusChannelFactory()
  {
    return new BusChannelFactory()
  }

  create()
  {
    const
    busChannelFactory = this.createBusChannelFactory(),
    channels          = this.createChannels()

    return new Bus(busChannelFactory, channels)
  }
}

module.exports = BusFactory
