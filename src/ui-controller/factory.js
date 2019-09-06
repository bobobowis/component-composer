const UIChunkController = require('.')

class UIChunkControllerFactory
{
  constructor({
    composer,
    templates,
    dtoMapper,
    controllers,
    bus
  })
  {
    this.composer     = composer
    this.templates    = templates
    this.dtoMapper    = dtoMapper
    this.controllers  = controllers
    this.bus        = bus
  }

  create({
    schema,
    id
  })
  {
    return new UIChunkController({
      id,
      controllers : this.controllers,
      dtoMapper   : this.dtoMapper,
      bus         : this.bus,
      template    : this.templates[schema]
    })
  }
}

module.exports = UIChunkControllerFactory
