const NotImplementedError = require('./error/not-implemented')

class IdGenerator
{
  constructor()
  {
    this[Symbol.for('type')] = 'id-generator'
  }

  getId()
  {
    throw new NotImplementedError('"getId" method not implemented')
  }

  get [Symbol.toStringTag]()
  {
    return 'IdGenerator'
  }
}

module.exports = IdGenerator
