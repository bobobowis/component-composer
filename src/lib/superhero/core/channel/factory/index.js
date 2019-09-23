const BusChannel = require('.')

class BusChannelFactory
{
  constructor({
    composer,
    multipleAssociativeArrayFactory
  })
  {
    this.composer                        = composer
    this.multipleAssociativeArrayFactory = multipleAssociativeArrayFactory
  }

  createMultipleAssociativeArray()
  {
    return this.multipleAssociativeArrayFactory.create()
  }

  create(id)
  {
    return new BusChannel({
      id,
      observers : this.createMultipleAssociativeArray(),
      composer  : this.composer
    })
  }
}

module.exports = BusChannelFactory
