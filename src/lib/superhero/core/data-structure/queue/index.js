/* eslint-disable no-undef */
define(function()
{
  class Queue
  {
    constructor({
      items
    })
    {
      this.items                  = items
      this[Symbol.for('schema')]  = 'data-structure/queue'
    }

    enqueue(element)
    {
      this.items.push(element)
    }

    dequeue()
    {
      if(!this.isEmpty())
        return this.items.shift()

      return undefined
    }

    front()
    {
      if(!this.isEmpty())
        return this.items[0]

      return undefined
    }

    isEmpty()
    {
      return this.items.length === 0
    }

    reset()
    {
      this.items = []
    }

    get [Symbol.toStringTag]()
    {
      return 'Queue'
    }
  }

  return Queue
})
