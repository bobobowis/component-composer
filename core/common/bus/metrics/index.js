/**
 * @implements {superhero/core/eventbus/observer}
 */
class MetricsObserver
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

module.exports = MetricsObserver
