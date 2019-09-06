class Store
{
  constructor({
    state,
    rootReducer,
    deepclone
  })
  {
    this.state        = state
    this.rootReducer  = rootReducer
    this.deepclone    = deepclone
  }

  getState()
  {
    return this.deepclone.clone(this.state)
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
