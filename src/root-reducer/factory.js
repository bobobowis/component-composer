const RootReducer = require('.')

class RootReducerFactory
{
  constructor({
    locator,
    propsMapper
  })
  {
    this.propsMapper  = propsMapper
    this.locator      = locator
  }

  create()
  {
    return new RootReducer({
      locator     : this.locator,
      propsMapper : this.propsMapper
    })
  }
}

module.exports = RootReducerFactory
