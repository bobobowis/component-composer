const Dispatcher = require('.')

class DispatcherFactory
{
  create({ store, propsMapper, bus })
  {
    return new Dispatcher(store, propsMapper, bus)
  }
}

module.exports = DispatcherFactory
