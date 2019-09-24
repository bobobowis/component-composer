class Reducer
{
  constructor({
    bus
  })
  {
    this.channelId  = 'DISPATCHER'
    this.bus        = bus
  }

  dispatch({
    actionId,
    id,
    type,
    payload
  })
  {
    this.bus.getChannel(this.channelId).publish({
      id      : actionId,
      emitter : id,
      type,
      payload
    })
  }

  executeAction({
    action,
    state,
    mappingInfo
  })
  {
    throw new Error('Method not implemented yet') // TODO Better error
  }
}

module.exports = Reducer
