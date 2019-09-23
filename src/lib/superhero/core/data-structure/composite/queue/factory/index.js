const Queue = require('..')

class QueueFactory
{
  constructor({
    composer
  })
  {
    this.composer = composer
  }

  create(items = [])
  {
    const args = this.composer.compose('data-structure/queue', { items })
    return new Queue(args)
  }
}

module.exports = QueueFactory
