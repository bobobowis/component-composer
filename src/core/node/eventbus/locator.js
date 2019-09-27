const EventBus = require('.')

class EventBusLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration   = this.locator.locate('core/configuration'),
    eventbusOptions = configuration.find('eventbus.options'),
    observers       = configuration.find('eventbus.observers'),
    observersKeys   = Object.keys(observers || {}),
    consoleFactory  = this.locator.locate('core/console/factory'),
    eventBusConsole = consoleFactory.create({
      prefix     : 'WARN',
      tty        : true,
      color      : 'black',
      background : 'yellow'
    }),
    eventbus        = new EventBus(eventbusOptions, observersKeys, eventBusConsole)

    return eventbus
  }
}

module.exports = EventBusLocator
