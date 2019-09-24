const Queue = require('.')


class QueueLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {Queue}
   */
  locate()
  {
    return Queue
  }
}

module.exports = QueueLocator
