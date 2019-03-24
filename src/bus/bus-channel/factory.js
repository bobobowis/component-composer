const
BusChannel    = require('.'),
ActionFactory = require('./action/factory')

class BusChannelFactory
{
  createActionFactory()
  {
    return new ActionFactory()
  }

  create()
  {
    const
    actionFactory = this.createActionFactory(),
    busChannel    = new BusChannel(actionFactory)

    return busChannel
  }
}

module.exports = BusChannelFactory
