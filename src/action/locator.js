const
ActionFactory       = require('./factory'),
LocatorConstituent  = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class ActionFactoryLocator extends LocatorConstituent
{
  /**
   * @returns {ActionFactory}
   */
  locate()
  {
    const composer = this.locator.locate('core/schema/composer')

    return new ActionFactory({
      composer
    })
  }
}

module.exports = ActionFactoryLocator
