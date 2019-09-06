class RootReducer
{
  constructor({
    locator,
    propsMapper
  })
  {
    this.locator      = locator
    this.propsMapper  = propsMapper
  }

  getMappingInfo(id)
  {
    return this.propsMapper.getMappingInfo(id)
  }

  execute(action, state)
  {
    const
    mappingInfo = this.getMappingInfo(action.source),
    reducer     = this.locator.locate(action.type),
    newState    = reducer.executeAction(action, state, mappingInfo)

    return newState
  }
}

module.exports = RootReducer
