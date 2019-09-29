const AssociativeArray = require('..')

class AssociativeArrayFactory
{
  constructor({
    composer
  })
  {
    this.composer = composer
  }

  create(items = {})
  {
    const args = this.composer.compose('data-structure/associative-array', { items })
    return new AssociativeArray({ ...args })
  }
}

module.exports = AssociativeArrayFactory
