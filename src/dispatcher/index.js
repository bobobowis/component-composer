class Dispatcher
{
  constructor(store, propsMapper, bus)
  {
    this.store       = store
    this.propsMapper = propsMapper
    this.bus         = bus

    this.createDispatcherChannel()
  }

  createDispatcherChannel()
  {
    this.bus.addChannel('DISPATCHER')
    this.bus.subscribeAll('DISPATCHER', this.dispatchAction.bind(this))
  }

  dispatchAction(action)
  {
    console.log(JSON.stringify(action))
    this.modifyStore(action)
    console.log(JSON.stringify(this.store.state))
    this.updateMapper()
    this.notifySource(action)
  }

  modifyStore(action)
  {
    this.store.apply(action)
  }

  updateMapper()
  {
    const state = this.store.getState()
    this.propsMapper.update(state)
  }

  notifySource(action)
  {
    const
    channelId = action.source,
    actionId  = 'PROPS_CHANGED',
    source    = action.source,
    type      = action.type,
    payload   = this.propsMapper.getProps(action.source)

    this.bus.publish(
      channelId,
      actionId,
      source,
      type,
      payload
    )
  }
}

module.exports = Dispatcher
