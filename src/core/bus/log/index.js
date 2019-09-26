/**
 * @implements {superhero/core/eventbus/observer}
 */
class LogObserver
{
  constructor(logConsole)
  {
    this.logConsole = logConsole
  }

  observe(data)
  {
    this.logConsole.log(data)
  }
}

module.exports = LogObserver
