const deepCopy = require('../deepcopy')

class Store
{
  constructor(state, rootReducer)
  {
    this.state        = state
    this.rootReducer  = rootReducer
  }

  getState()
  {
    return deepCopy(this.state)
  }

  apply(action)
  {
    const
    state     = this.getState(),
    newState  = this.rootReducer.execute(action, state)

    this.state = newState
  }
}

module.exports = Store
