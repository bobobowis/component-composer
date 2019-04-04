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

  getJSON()
  {
    const json = {}

    for(let key in this.table)
      json[key] = this.table[key]

    return json
  }

  getArray()
  {
    const array = []

    for(let key in this.table)
      array.push(this.table[key])

    return array
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
