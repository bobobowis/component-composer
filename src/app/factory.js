const
App                 = require('.'),
DispatcherFactory   = require('../dispatcher/factory'),
RootReducerFactory  = require('../root-reducer/factory'),
StoreValidator      = require('../store/validator'),
StoreFactory        = require('../store/factory'),
PropsMapperFactory  = require('../props-mapper/factory'),
BusFactory          = require('../bus/factory'),
ControllersFactory  = require('../controllers/factory')

class AppFactory
{
  createPropsMapper(initialState)
  {
    const
    propsMapperFactory  = new PropsMapperFactory(),
    propsMapper         = propsMapperFactory.create({ initialState })

    return propsMapper
  }

  createRootReducer(propsMapper)
  {
    const
    rootReducerFactory  = new RootReducerFactory(),
    rootReducer         = rootReducerFactory.create({ propsMapper })

    return rootReducer
  }

  createStore(initialState, rootReducer)
  {
    const
    storeValidator      = new StoreValidator(),
    storeFactory        = new StoreFactory(storeValidator),
    store               = storeFactory.create({ initialState, rootReducer })

    return store
  }

  createBus()
  {
    const
    busFactory = new BusFactory(),
    bus        = busFactory.create()

    return bus
  }

  createDispatcher(store, propsMapper, bus)
  {
    const
    dispatcherFactory   = new DispatcherFactory(),
    dispatcher          = dispatcherFactory.create({ store, propsMapper, bus })

    return dispatcher
  }

  createControllers(propsMapper, bus)
  {
    const
    controllersFactory  = new ControllersFactory(),
    controllers         = controllersFactory.create({ propsMapper, bus })

    return controllers
  }

  create({ initialState })
  {
    const
    propsMapper         = this.createPropsMapper(initialState),
    rootReducer         = this.createRootReducer(propsMapper),
    store               = this.createStore(initialState, rootReducer),
    bus                 = this.createBus(),
    dispatcher          = this.createDispatcher(store, propsMapper, bus),
    controllers         = this.createControllers(propsMapper, bus)

    return new App(
      initialState,
      store,
      propsMapper,
      rootReducer,
      bus,
      dispatcher,
      controllers
    )
  }
}

module.exports = AppFactory
