const
UIChunkControllerFactory  = require('./factory'),
LocatorConstituent        = require('@superhero/core/locator/constituent')

/**
 * @extends {@superhero/core/locator/constituent}
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
    propsMapper = this.locator.locate('core/ui/props-mapper'),
    bus         = this.locator.locate('core/ui/bus')

    return new UIChunkControllerFactory({
      templates,
      controllers,
      propsMapper,
      bus
    })
  }
}

module.exports = UIChunkControllerFactoryLocator
