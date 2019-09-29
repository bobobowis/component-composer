const EventbusFactory = require('.')

class EventbusFactoryLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {EventbusFactory}
   */
  locate()
  {
    const
    composer                        = this.locator.locate('core/schema/composer'),
    consoleFactory                  = this.locator.locate('core/console/factory'),
    multipleAssociativeArrayFactory = this.locator.locate('data-structure/multiple-associative-array/factory')

    return new EventbusFactory({
      composer,
      consoleFactory,
      multipleAssociativeArrayFactory
    })
  }
}

module.exports = EventbusFactoryLocator
