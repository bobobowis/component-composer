const QueueFactory  = require('.')

class QueueFactoryLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

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
