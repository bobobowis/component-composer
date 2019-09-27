const Console = require('..')

class ConsoleFactory
{
  constructor({
    util,
    dateformat,
    console,
    defaults,
    availableColors
  })
  {
    this.util             = util
    this.dateformat       = dateformat
    this.console          = console
    this.defaults         = defaults
    this.availableColors  = availableColors
  }

  create(options = {})
  {
    return new Console({
      util            : this.util,
      dateformat      : this.dateformat,
      console         : this.console,
      availableColors : this.availableColors,
      config          : { ...this.defaults, ...options }
    })
  }
}

module.exports = ConsoleFactory
