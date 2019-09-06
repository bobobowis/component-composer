const BusChannel = require('.')

class BusChannelFactory
{
  constructor({
    actionFactory
  })
  {
    this.actionFactory = actionFactory
  }

  create()
  {
    const busChannel    = new BusChannel({
      actionFactory : this.actionFactory
    })

    return busChannel
  }
}

module.exports = BusChannelFactory
