
class UIChunkCollection
{
  constructor({
    id,
    name,
    selector,
    controller,
    reducer,
    uuid,
    collection,
    type
  })
  {
    this.id         = id
    this.name       = name
    this.selector   = selector
    this.controller = controller
    this.reducer    = reducer
    this.uuid       = uuid
    this.collection = collection
    this.type       = type
  }
}

module.exports = UIChunkCollection
