const BusChannel = require('..')

class BusChannelFactory
{
  constructor({
    composer,
    consoleFactory,
    multipleAssociativeArrayFactory
  })
  {
    this.composer                        = composer
    this.consoleFactory                  = consoleFactory
    this.multipleAssociativeArrayFactory = multipleAssociativeArrayFactory
  }

  createMultipleAssociativeArray()
  {
    return this.multipleAssociativeArrayFactory.create()
  }

  createConsole(options = {})
  {
    return this.consoleFactory.create(options)
  }

  create({
    id,
    consoleOptions
  })
  {
    return new BusChannel({
      id,
      console   : this.createConsole(consoleOptions),
      observers : this.createMultipleAssociativeArray(),
      composer  : this.composer
    })
  }
}

module.exports = BusChannelFactory
