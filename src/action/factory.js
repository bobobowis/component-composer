class ActionFactory
{
  constructor({
    composer
  })
  {
    this.composer = composer
  }

  create(actionDTO)
  {
    return this.composer.compose('core/ui/action', actionDTO) // { id, emitter, payload }
  }
}

module.exports = ActionFactory
