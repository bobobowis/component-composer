class RootReducer
{
  constructor(reducersLocator, propsMapper)
  {
    this.reducersLocator = reducersLocator
    this.propsMapper     = propsMapper
  }

  getMappingInfo(source)
  {
    return this.propsMapper.getMappingInfo(source)
  }

  addReducer(type, reducer)
  {
    this.reducersLocator.add(type, reducer)
  }

  execute(action, state)
  {
    const
    mappingInfo = this.getMappingInfo(action.source),
    reducer     = this.reducersLocator.locate(action.type),
    newState    = reducer.executeAction(action, state, mappingInfo)

    return newState
  }
}

module.exports = RootReducer
