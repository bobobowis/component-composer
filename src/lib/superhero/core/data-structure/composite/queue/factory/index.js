/* eslint-disable no-undef */
define([
  'superhero/core/data-structure/composite/queue/index'
], function(Queue)
{
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

  return QueueFactory
})
