class Store
{
  constructor({
    bus,
    rootReducer,
    deepclone
  })
  {
    this.channelId    = 'STORE'

    this.bus          = bus
    this.rootReducer  = rootReducer
    this.deepclone    = deepclone

    this.bus.addChannel(this.channelId)

    this.bus.getChannel('DISPATCHER').subscribe()
  }

  setState(state)
  {
    this.state = state

    this.bus.publish({
      channelId : this.channelId,
      actionId  : 'STATE_CHANGED',
      source    : this.channelId,
      payload   : this.state
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

    this.state = newState
  }
}

module.exports = Store
