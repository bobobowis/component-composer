/* eslint-disable no-undef */
define(function()
{
  class AssociativeArray
  {
    constructor(dto)
    {
      this.dto = dto
    }

    get(id)
    {
      return this.dto['array'][id]
    }

    add({
      id,
      element
    })
    {
      this.dto['array'][id] = element
    }

    remove(id)
    {
      delete this.dto['array'][id]
    }

    reset()
    {
      this.dto['array'] = {}
    }

    toJSON()
    {
      return this.dto['array']
    }

    getArray()
    {
      const array  = []

      for(let key in this.dto['array'])
        array.push(this.get(key))

      return array
    }

    count()
    {
      return Object.keys(this.dto['array']).length
    }

    [Symbol.iterator]()
    {
      const  keys = Object.keys(this.dto['array'])

      let  index = 0
      return {
        next : () =>
        {
          if(index < keys.length)
          {
            const key = keys[index++]
            return {
              value : this.dto['array'][key],
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
