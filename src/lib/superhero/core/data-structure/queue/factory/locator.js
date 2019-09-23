const
QueueFactory        = require('.'),
LocatorConstituent  = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class QueueFactoryLocator extends LocatorConstituent
{
  /**
   * @returns {QueueFactory}
   */
  locate()
  {
    const composer = this.locator.locate('core/schema/composer')
    return new QueueFactory({
      composer
    })
  }
}

module.exports = QueueFactoryLocator
