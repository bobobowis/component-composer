const
LocatorConstituent  = require('superhero/core/locator/constituent'),
StackFactory        = require('.')

/**
 * @extends {superhero/core/locator/constituent}
 */
class StackFactoryLocator extends LocatorConstituent
{
  /**
   * @returns {StackFactory}
   */
  locate()
  {
    const composer = this.locator.locate('core/schema/composer')
    return new StackFactory({
      composer
    })
  }
}

module.exports = StackFactoryLocator
