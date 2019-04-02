const
UIChunkTree = require('.'),
Locator     = require('../locator')

class UIChunkTreeFactory
{
  createChunksLocator()
  {
    const chunksLocator = new Locator()
    return chunksLocator
  }

  create({ rootChunk })
  {
    const
    chunksLocator = this.createChunksLocator(),
    chunkTree     = new UIChunkTree(chunksLocator, rootChunk)

    return chunkTree
  }
}

module.exports = UIChunkTreeFactory
