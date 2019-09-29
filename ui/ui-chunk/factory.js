const UIChunk = require('.')

class UIChunkFactory
{
  constructor({
    composer
  })
  {
    this.composer = composer
  }

  create({
    id,
    schema,
    dto,
    template
  })
  {
    const composedDTO = this.composer.compose(schema, dto)

    return new UIChunk({
      id,
      schema,
      template,
      dto : composedDTO
    })
  }
}

module.exports = UIChunkFactory
