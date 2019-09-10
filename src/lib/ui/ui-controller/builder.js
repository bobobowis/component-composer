const
UIChunkControllerFactory  = require('./factory'),
LocatorConstituent        = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class UIChunkControllerFactoryLocator extends LocatorConstituent
{
  /**
   * @returns {UIChunkControllerFactory}
   */
  locate()
  {
    const
    templates   = this.locator.locate('core/ui/templates'),
    controllers = this.locator.locate('core/ui/controllers'),
    dtoMapper   = this.locator.locate('core/ui/dto-mapper'),
    bus         = this.locator.locate('core/ui/bus')

    return new UIChunkControllerFactory({
      templates,
      controllers,
      dtoMapper,
      bus
    })
  }
}

module.exports = UIChunkControllerFactoryLocator
