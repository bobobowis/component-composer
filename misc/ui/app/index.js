class App
{
  constructor({
    store,
    dtoMapper,
    rootReducer,
    bus,
    dispatcher,
    controllers
  })
  {
    this.store        = store
    this.dtoMapper    = dtoMapper
    this.rootReducer  = rootReducer
    this.bus          = bus
    this.dispatcher   = dispatcher
    this.controllers  = controllers
  }

  run(initialState)
  {
    this.store.setState(initialState)
    this.dtoMapper.update(initialState)
    this.controllers.initializeControllers()
  }
}

module.exports = App
