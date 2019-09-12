/* eslint-disable no-undef */
define(function()
{
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

  return LogObserver
})
