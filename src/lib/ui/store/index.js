class Store
{
  constructor({
    bus,
    rootReducer,
    deepclone,
    channelId
  })
  {
    this.channelId    = channelId

    this.bus          = bus
    this.rootReducer  = rootReducer
    this.deepclone    = deepclone

    this.bus.addChannel(this.channelId)
    this.channel = this.bus.getChannel(this.channelId)
  }

  setState(state)
  {
    this.state = state

    this.channel.publish({
      actionId : 'STATE_CHANGED',
      payload  : this.state
    })
  }

  getState()
  {
    return this.deepclone.clone(this.state)
  }

  apply(action)
  {
    const
    state     = this.getState(),
    newState  = this.rootReducer.execute(action, state)

    this.setState(newState)
  }
}

module.exports = Store
