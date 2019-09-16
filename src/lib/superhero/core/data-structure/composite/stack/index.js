/* eslint-disable no-undef */
define(function()
{
  class Stack
  {
    constructor({
      items
    })
    {
      this.items                  = items
      this[Symbol.for('schema')]  = 'data-structurestack'
    }

    stack(element)
    {
      this.items.push(element)
    }

    pop()
    {
      if(!this.isEmpty())
        return this.items.pop()
      return undefined
    }

    peek()
    {
      return this.items[this.items.length - 1]
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
      return 'Stack'
    }
  }

  return Stack
})
