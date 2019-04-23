class UIChunk
{
  constructor(id, type, props)
  {
    this.id          = id
    this.type        = type
    this.props       = props
    this.isChunk     = true
    // this.template    = template
    // this.controllers = controllers
    // this.reducers    = reducers
  }
}

module.exports = UIChunk
