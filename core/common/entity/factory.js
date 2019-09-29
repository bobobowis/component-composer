/**
 * @extends {superhero/core/locator/constituent}
 */
class EntityFactory
{
  constructor({
    idGenerator,
    deepassign,
    bus,
    deepfreeze,
    deepcopy,
    composer,
    EntityClass,
    coreObject,
    type
  })
  {
    this.idGenerator          = idGenerator
    this.bus                  = bus
    this.deepassign           = deepassign
    this.deepfreeze           = deepfreeze
    this.deepcopy             = deepcopy
    this.composer             = composer
    this.EntityClass          = EntityClass
    this.coreObject           = coreObject
    this.type                 = type

    this[Symbol.for('type')]  = 'entity-factory'
  }

  getId(args)
  {
    return this.idGenerator.getId(args)
  }

  composeDTO(dto)
  {
    return this.composer.compose(this.type, dto)
  }

  /**
   * @returns {Entity}
   */
  create({
    id,
    dto,
    ...args
  })
  {
    const entityDTO = this.composeDTO(dto)

    return new this.EntityClass({
      id         : id ? id : this.idGenerator.getId(),
      dto        : entityDTO,
      bus        : this.bus,
      deepassign : this.deepassign,
      deepfreeze : this.deepfreeze,
      deepcopy   : this.deepcopy,
      composer   : this.composer,
      type       : this.type,
      ...args
    })
  }

  get [Symbol.toStringTag]()
  {
    return 'EntityFactory'
  }
}

module.exports = EntityFactory
