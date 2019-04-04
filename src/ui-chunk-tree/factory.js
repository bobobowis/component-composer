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

  createAdjacencyLocator()
  {
    const adjacencyLocator = new Locator()
    return adjacencyLocator
  }

  create({ rootChunk })
  {
    const
    chunksLocator    = this.createChunksLocator(),
    adjacencyLocator = this.createAdjacencyLocator(),
    chunkTree        = new UIChunkTree(chunksLocator, adjacencyLocator, rootChunk)

    return chunkTree
  }
}

module.exports = UIChunkTreeFactory
