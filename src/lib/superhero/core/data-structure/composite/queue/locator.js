const
Queue               = require('.'),
LocatorConstituent  = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class QueueLocator extends LocatorConstituent
{
  /**
   * @returns {Queue}
   */
  locate()
  {
    return Queue
  }
}

module.exports = QueueLocator
