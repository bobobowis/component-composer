class UIChunk
{
  constructor({
    id,
    uuid,
    selector,
    type,
    props,
    template,
    controller,
    reducer
  })
  {
    this.id         = id
    this.uuid       = uuid
    this.selector   = selector
    this.type       = type
    this.props      = props
    this.template   = template
    this.controller = controller
    this.reducer    = reducer
  }
}

module.exports = UIChunk
