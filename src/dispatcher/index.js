class Dispatcher
{
  constructor({
    store,
    dtoMapper,
    bus
  })
  {
    this.channelId  = 'DISPATCHER'

    this.store      = store
    this.dtoMapper  = dtoMapper
    this.bus        = bus

    this.createDispatcherChannel()
  }

  createDispatcherChannel()
  {
    this.bus.addChannel(this.channelId)

    this.bus.subscribeAll({
      channelId  : this.channelId,
      subscriber : this.dispatchAction.bind(this)
    })
  }

  dispatchAction(action)
  {
    this.modifyStore(action)
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
    this.dtoMapper.update(state)
  }

  notifySource(action)
  {
    const
    channelId = action.source,
    actionId  = 'DTO_CHANGED',
    source    = action.source,
    schema    = action.schema,
    payload   = this.dtoMapper.getDTO(action.source)

    this.bus.publish({
      channelId,
      actionId,
      source,
      schema,
      payload
    })
  }
}

module.exports = Dispatcher
