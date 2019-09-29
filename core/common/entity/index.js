class Entity
{
  constructor({
    id,
    dto,
    deepfreeze,
    deepcopy,
    bus,
    set,
    composer,
    type
  })
  {
    if(new.target === Entity)
      throw new TypeError('Cannot construct Entity instances directly')

    this[Symbol.for('id')]    = id
    this[Symbol.for('type')]  = type

    this.set                  = set
    this.deepfreeze           = deepfreeze
    this.deepcopy             = deepcopy
    this.bus                  = bus
    this.composer             = composer
    this.state                = this.createState(dto)

    this.bus.addChannel(this[Symbol.for('id')])
  }

  createState(dto)
  {
    const state = this.composer.compose(this[Symbol.for('type')], dto)
    return this.deepfreeze.freeze(state)
  }

  emit({
    name,
    data
  })
  {
    this.bus.emit({
      channelId : this[Symbol.for('id')],
      name,
      data
    })
  }

  changeStatePath(path, value)
  {
    const stateModified = this.deepassign.assign(this.state, path, value)

    this.state          = this.changeState(stateModified)

    this.bus.emit({
      channelId : this[Symbol.for('id')],
      name      : `${this[Symbol.for('id')]}.entity.${path}.state-changed`,
      data      : stateModified
    })
  }

  changeState(newState)
  {
    this.state = this.createState(newState)

    this.bus.publish({
      channelId : this[Symbol.for('id')],
      name      : `${this[Symbol.for('id')]}.entity.state-changed`,
      data      : newState
    })
  }

  get [Symbol.toStringTag]()
  {
    return 'Entity'
  }
}

module.exports = Entity
