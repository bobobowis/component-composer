/* eslint-disable no-undef */
define(function()
{
  class AssociativeArray
  {
    constructor({ items })
    {
      this.items                  = items
      this[Symbol.for('schema')]  = 'data-structure/associative-array'
    }

    get(id)
    {
      return this.items[id]
    }

    add({
      id,
      element
    })
    {
      this.items[id] = element
    }

    remove(id)
    {
      delete this.items[id]
    }

    reset()
    {
      this.items = {}
    }

    toJSON()
    {
      return this.items
    }

    toArray()
    {
      const
      keys   = [],
      values = []

      for(let key in this.items)
      {
        keys.push(key)
        values.push(this.get(key))
      }

      return {
        keys,
        values
      }
    }

    count()
    {
      return Object.keys(this.items).length
    }

    [Symbol.iterator]()
    {
      const  keys = Object.keys(this.items)

      let  index = 0
      return {
        next : () =>
        {
          if(index < keys.length)
          {
            const key = keys[index++]
            return {
              value : this.items[key],
              done  : false
            }
          }
          else
          {
            return { done: true }
          }
        }
      }
    }

    get [Symbol.toStringTag]()
    {
      return 'AssociativeArray'
    }
  }

  return AssociativeArray
})
