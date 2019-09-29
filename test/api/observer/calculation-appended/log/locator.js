const
ObserverCalculationAppendedLog  = require('.'),
LocatorConstituent              = require('../../../../../core/common/locator/constituent')

/**
 * @memberof Api
 * @extends {superhero/core/locator/constituent}
 */
class ObserverCalculationAppendedLogLocator extends LocatorConstituent
{
  /**
   * @returns {ObserverCalculationAppendedLog}
   */
  locate()
  {
    const
    consoleFactory  = this.locator.locate('core/console/factory'),
    console         = consoleFactory.create({
      prefix : 'ERR'
    }),
    eventbus = this.locator.locate('core/eventbus')

    return new ObserverCalculationAppendedLog(console, eventbus)
  }
}

module.exports = ObserverCalculationAppendedLogLocator
