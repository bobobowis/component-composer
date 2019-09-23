const Stack = require('..')

class StackFactory
{
  constructor({
    composer
  })
  {
    this.composer = composer
  }

  create(items = [])
  {
    const args = this.composer.compose('data-structure/stack', { items })
    return new Stack(args)
  }
}

module.exports = StackFactory
