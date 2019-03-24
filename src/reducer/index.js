class Reducer
{
  constructor(bus)
  {
    this.bus = bus
  }

  dispatch(actionId, id, type, payload)
  {
    this.bus.publish('DISPATCHER', actionId, id, type, payload)
  }

  executeAction(action, state, mappingInfo)
  {
    return state
  }
}

module.exports = Reducer
