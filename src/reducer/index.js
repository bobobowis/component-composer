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
    schema,
    payload
  })
  {
    this.bus.publish({
      channelId : this.channelId,
      actionId,
      id,
      schema,
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
