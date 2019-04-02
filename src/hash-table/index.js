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
    const keys = Object.keys(this.table)

    let  index = 0
    return {
      next : () =>
      {
        if(index < keys.length)
        {
          const key = keys[index++]
          return {
            value : this.table[key],
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

module.exports = HashTable
