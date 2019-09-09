class RootReducer
{
  constructor({
    locator,
    dtoMapper
  })
  {
    this.locator    = locator
    this.dtoMapper  = dtoMapper
  }

  getMappingInfo(id)
  {
    return this.dtoMapper.getMappingInfo(id)
  }

  execute(action, state)
  {
    const
    mappingInfo = this.getMappingInfo(action.emitter),
    reducer     = this.locator.locate(action.type),
    newState    = reducer.executeAction(action, state, mappingInfo)

    return newState
  }
}

module.exports = RootReducer
