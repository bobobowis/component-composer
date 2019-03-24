const Store = require('.')

class StoreFactory
{
  constructor(storeValidator)
  {
    this.validator = storeValidator
  }

  create({ initialState, rootReducer })
  {
    this.validator.validate({ initialState })

    return new Store(initialState, rootReducer)
  }
}

module.exports = StoreFactory
