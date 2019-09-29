const IdGenerator = require('..')

class IncrementalIdGenerator extends IdGenerator
{
  constructor({
    startIndex
  })
  {
    super()
    this.index                = startIndex
    this[Symbol.for('type')]  = 'incremental-id-generator'
  }

  getId()
  {
    return this.index++
  }
}

module.exports = IncrementalIdGenerator
