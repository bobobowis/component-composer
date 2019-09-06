const Store = require('.')

class StoreFactory
{
  constructor({
    deepclone,
    rootReducer
  })
  {
    this.deepclone    = deepclone
    this.rootReducer  = rootReducer
  }

  create(state = {})
  {
    return new Store({
      state,
      rootReducer : this.rootReducer,
      deepcopy    : this.deepclone
    })
  }
}

module.exports = StoreFactory
