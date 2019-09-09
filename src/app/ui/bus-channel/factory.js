const BusChannel = require('.')

class BusChannelFactory
{
  constructor({
    actionFactory
  })
  {
    this.actionFactory = actionFactory
  }

  create(id)
  {
    const busChannel    = new BusChannel({
      id,
      actionFactory : this.actionFactory
    })

    return busChannel
  }
}

module.exports = BusChannelFactory
