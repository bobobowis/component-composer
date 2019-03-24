class Action
{
  constructor(id, source, type, payload)
  {
    this.id       = id
    this.source   = source
    this.type     = type
    this.payload  = payload
  }
}

module.exports = Action
