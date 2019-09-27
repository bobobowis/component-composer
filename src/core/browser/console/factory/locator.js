const BrowserConsoleFactory = require('.')

class BrowserConsoleFactoryLocator
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
    coreString      = this.locator.locate('core/string'),
    jsConsole       = console

    return new BrowserConsoleFactory({
      coreString,
      util,
      dateformat,
      defaults,
      console : jsConsole
    })
  }
}

module.exports = BrowserConsoleFactoryLocator
