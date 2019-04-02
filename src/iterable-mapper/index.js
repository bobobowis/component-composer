
class IterableMapper
{
  constructor(iterable, mappingFunction)
  {
    this.iterable        = iterable
    this.mappingFunction = mappingFunction
  }

  map()
  {
    const items = this.mapper()

    return [...items]
  }

  mapper()
  {
    return {
      [Symbol.iterator]()
      {
        const iterator = this.iterable[Symbol.iterator]()
        return {
          next()
          {
            const r = iterator.next()
            if(r.done)
            {
              return r
            }
            else
            {
              return {
                value : this.mappingFunction(r.value),
                done  : false
              }
            }
          }
        }
      }
    }
  }
}


module.exports = IterableMapper
