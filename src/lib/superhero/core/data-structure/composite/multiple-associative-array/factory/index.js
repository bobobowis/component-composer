const MultipleAssociativeArray = require('..')

class MultipleAssociativeArrayFactory
{
  constructor({
    composer
  })
  {
    this.composer = composer
  }

  create(items = {})
  {
    const args = this.composer.compose('data-structure/multiple-associative-array', { items })
    return new MultipleAssociativeArray(args)
  }
}

module.exports = MultipleAssociativeArrayFactory
