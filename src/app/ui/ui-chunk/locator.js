const
UIChunkFactory      = require('./factory'),
LocatorConstituent  = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class UIChunkFactoryLocator extends LocatorConstituent
{
  /**
   * @returns {UIChunkFactory}
   */
  locate()
  {
    const composer = this.locator.locate('core/schema/composer')

    return new UIChunkFactory({
      composer
    })
  }
}

module.exports = UIChunkFactoryLocator
