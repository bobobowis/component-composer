const
Props   = require('.'),
Locator = require('../locator')

class PropsFactory
{
  createLocator()
  {
    return new Locator()
  }

  create({ id })
  {
    const
    atomsLocator            = this.createLocator(),
    chunksLocator           = this.createLocator(),
    chunkCollectionsLocator = this.createLocator()

    return new Props({
      id,
      atomsLocator,
      chunksLocator,
      chunkCollectionsLocator
    })
  }
}

module.exports = PropsFactory
