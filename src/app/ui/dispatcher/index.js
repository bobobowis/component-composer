class Dispatcher
{
  constructor({
    store,
    dtoMapper,
    bus,
    channelId
  })
  {
    this.store      = store
    this.dtoMapper  = dtoMapper
    this.bus        = bus
    this.channelId  = channelId

    this.bus.addChannel(channelId)
    this.bus.subscribeAll(channelId, this.dispatchAction.bind(this))
  }

  updateStore(action)
  {
    this.store.apply(action)
  }

  updateMapper()
  {
    const state = this.store.getState()
    this.dtoMapper.update(state)
  }

  notifyEmitter(action)
  {
    this.bus.getChannel(action.emitter).publish({
      id      : 'DTO_CHANGED',
      type    : action.type,
      payload : this.dtoMapper.getDTO(action.emitter)
    })
  }

  dispatchAction(action)
  {
    this.updateStore(action)
    this.updateMapper()
    this.notifyEmitter(action)
  }
}

module.exports = Dispatcher
