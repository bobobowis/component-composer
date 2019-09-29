const IncrementalIdGenerator = require('../incremental-id-generator')

class IncrementalPrefixedIdGenerator extends IncrementalIdGenerator
{
  constructor({
    prefix,
    ...args
  })
  {
    super(args)
    this.prefix              = prefix
    this[Symbol.for('type')] = 'incremental-type-id-generator'
  }

  getId()
  {
    return `${this.prefix}-${super.getId()}`
  }
}

module.exports = IncrementalPrefixedIdGenerator
