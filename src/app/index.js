class App
{
  constructor(initialState, store, propsMapper, rootReducer, bus, dispatcher, controllers)
  {
    this.initialState = initialState
    this.store        = store
    this.propsMapper  = propsMapper
    this.rootReducer  = rootReducer
    this.bus          = bus
    this.dispatcher   = dispatcher
    this.controllers  = controllers
  }

  addReducer(type, Reducer)
  {
    const reducer = new Reducer(this.bus)
    this.rootReducer.addReducer(type, reducer)
  }

  addController(type, controller)
  {
    this.controllers.addController(type, controller)
  }

  initializeChunks()
  {
    this.controllers.initializeChunks()
  }

  run()
  {
    this.initializeChunks()
  }
}

module.exports = App
