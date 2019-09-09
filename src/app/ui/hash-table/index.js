/* eslint-disable no-undef */
define(function()
{
  class HashTable
  {
    constructor()
    {
      this.table = {}
    }

    get(id)
    {
      return this.table[id]
    }

    add(id, element)
    {
      this.table[id] = element
    }

    remove(id)
    {
      delete this.table[id]
    }

    reset()
    {
      this.table = {}
    }

    [Symbol.iterator]()
    {
      const data  = Object.keys(this.table)

      let  index = 0
      return {
        next : () =>
        {
          if(index < data.length)
          {
            return {
              value : this.table[data[index++]],
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
  }

  return HashTable
})
