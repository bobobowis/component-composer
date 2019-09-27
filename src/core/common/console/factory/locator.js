const ConsoleFactory = require('.')

class ConsoleFactoryLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    util            = require('util'),
    dateformat      = require('dateformat'),
    configuration   = this.locator.locate('core/configuration').find('core.console'),
    defaults        = configuration.default,
    availableColors = configuration.colors,
    jsConsole       = console

    return new ConsoleFactory({
      util,
      dateformat,
      defaults,
      availableColors,
      console : jsConsole
    })
  }
}

module.exports = ConsoleFactoryLocator
