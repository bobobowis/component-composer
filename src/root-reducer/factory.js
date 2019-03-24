const
Locator = require('../locator'),
RootReducer = require('.')

class RootReducerFactory
{
  createReducersLocator()
  {
    return new Locator()
  }

  create({ propsMapper })
  {
    const reducersLocator  = this.createReducersLocator()

    return new RootReducer(reducersLocator, propsMapper)
  }
}

module.exports = RootReducerFactory
