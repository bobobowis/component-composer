const Console = require('..')

class NodeConsoleFactory
{
  constructor({
    util,
    dateformat,
    console,
    defaults,
    coreString
  })
  {
    this.util       = util
    this.dateformat = dateformat
    this.console    = console
    this.defaults   = defaults
    this.coreString = coreString
  }

  create(options = {})
  {
    return new Console({
      coreString : this.coreString,
      util       : this.util,
      dateformat : this.dateformat,
      console    : this.console,
      config     : { ...this.defaults, ...options }
    })
  }
}

module.exports = NodeConsoleFactory
