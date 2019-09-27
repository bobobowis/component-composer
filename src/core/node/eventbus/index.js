const Events = require('events')

class EventBus extends Events
{
  constructor(options, observers, eventBusConsole)
  {
    super(options)
    this.observers        = observers
    this.eventBusConsole  = eventBusConsole
  }

  emit(name, data)
  {
    if(!this.observers.includes(name))
      this.eventBusConsole.warning(`event: "${name}" does not have a defined observer`)

    super.emit(name, { name, data })
  }
}

module.exports = EventBus
