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
    schema,
    dto,
    template
  })
  {
    const composedDTO = this.composer.compose(schema, dto)

    return new UIChunk({
      schema,
      template,
      dto : composedDTO
    })
  }
}

module.exports = UIChunkFactory
