/* eslint-disable no-undef */
define(function()
{
  class AssociativeArray
  {
    constructor(items)
    {
      this.items = items
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

    getArray()
    {
      const array  = []

      for(let key in this.items)
        array.push(this.get(key))

      return array
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
