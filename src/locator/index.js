const
HashTable             = require('../hash-table'),
ServiceUndefinedError = require('./error/service-undefined')

class Locator extends HashTable
{
  locate(id)
  {
    const service = this.get(id)

    if(service)
      return service
    else
      throw new ServiceUndefinedError(`${id} can not be located`)
  }
}

module.exports = Locator
