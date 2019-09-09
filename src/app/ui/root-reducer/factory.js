const RootReducer = require('.')

class RootReducerFactory
{
  constructor({
    locator,
    dtoMapper
  })
  {
    this.dtoMapper  = dtoMapper
    this.locator    = locator
  }

  create()
  {
    return new RootReducer({
      locator   : this.locator,
      dtoMapper : this.dtoMapper
    })
  }
}

module.exports = RootReducerFactory
