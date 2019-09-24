/**
 * @implements {superhero/core/eventbus/observer}
 */
class LogObserver
{
  observe(data)
  {
    console.log(JSON.stringify(data))
  }
}

module.exports = LogObserver
