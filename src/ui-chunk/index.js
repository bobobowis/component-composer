class UIChunk
{
  constructor({
    id,
    type,
    props
    // name,
    // uuid,
    // selector,
    // template,
    // controller,
    // reducer
  })
  {
    this.id          = id
    this.type        = type
    this.props       = props
    this.isChunk     = true
  }
}

module.exports = UIChunk
