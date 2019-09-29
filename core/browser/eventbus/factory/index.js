const Eventbus = require('..')

class EventbusFactory
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
    consoleOptions
  })
  {
    return new Eventbus({
      id        : 'eventbus',
      console   : this.createConsole(consoleOptions),
      observers : this.createMultipleAssociativeArray(),
      composer  : this.composer
    })
  }
}

module.exports = EventbusFactory
