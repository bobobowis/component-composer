const IdGenerator = require('..')

class UUIDv4Generator extends IdGenerator
{
  constructor({ uuidv4 })
  {
    super()
    this.uuidv4 = uuidv4
    this[Symbol.for('type')] = 'uuidv4-generator'
  }

  getId()
  {
    return this.uuidv4()
  }
}

module.exports = UUIDv4Generator
