const
ObserverCalculationCreatedLog = require('.'),
LocatorConstituent            = require('../../../../../core/common/locator/constituent')

/**
 * @memberof Api
 * @extends {superhero/core/locator/constituent}
 */
class ObserverCalculationCreatedLogLocator extends LocatorConstituent
{
  /**
   * @returns {ObserverCalculationCreatedLog}
   */
  locate()
  {
    const
    consoleFactory  = this.locator.locate('core/console/factory'),
    console         = consoleFactory.create({
      prefix : 'ERR'
    }),
    eventbus = this.locator.locate('core/eventbus')

    return new ObserverCalculationCreatedLog(console, eventbus)
  }
}

module.exports = ObserverCalculationCreatedLogLocator
