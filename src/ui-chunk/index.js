class UIChunk
{
  constructor({
    id,
    schema,
    dto,
    template
  })
  {
    this.id       = id
    this.schema   = schema
    this.dto      = dto
    this.template = template
  }
}

module.exports = UIChunk
