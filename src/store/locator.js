const
StoreFactory        = require('./factory'),
LocatorConstituent  = require('@superhero/core/locator/constituent')

/**
 * @extends {@superhero/core/locator/constituent}
 */
class StoreFactoryLocator extends LocatorConstituent
{
  /**
   * @returns {StoreFactory}
   */
  locate()
  {
    const
    rootReducer = this.locator.locate('core/ui/root-reducer'),
    deepclone   = this.locator.locate('core/deepclone')

    return new StoreFactory({
      rootReducer,
      deepclone
    })
  }
}

module.exports = StoreFactoryLocator
