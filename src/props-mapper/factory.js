const
HashTable   = require('../hash-table'),
PropsMapper = require('.')

class PropsMapperFactory
{
  createHashTable()
  {
    return new HashTable()
  }

  create({ initialState })
  {
    const
    props       = this.createHashTable(),
    mappingInfo = this.createHashTable()

    return new PropsMapper(props, mappingInfo, initialState)
  }
}

module.exports = PropsMapperFactory
