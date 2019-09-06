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

  }
}

module.exports = App
