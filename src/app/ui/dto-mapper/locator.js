const
DTOMapper          = require('.'),
LocatorConstituent = require('superhero/core/locator/constituent')

/**
 * @extends {superhero/core/locator/constituent}
 */
class DTOMapperLocator extends LocatorConstituent
{
  /**
   * @returns {DTOMapper}
   */
  locate()
  {
    const
    hashTableFactory  = this.locator.locate('core/ui/hash-table/factory'),
    dtos              = hashTableFactory.create(),
    mappingInfo       = hashTableFactory.create()

    return new DTOMapper({
      dtos,
      mappingInfo
    })
  }
}

module.exports = DTOMapperLocator
