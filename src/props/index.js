class Props
{
  constructor({
    id,
    atomsLocator,
    chunksLocator,
    chunkCollectionsLocator
  })
  {
    this.id                      = id
    this.atomsLocator            = atomsLocator
    this.chunksLocator           = chunksLocator
    this.chunkCollectionsLocator = chunkCollectionsLocator
  }

  addAtom(name, atom)
  {
    this.atomsLocator.add(name, atom)
  }

  addChunk(chunk)
  {
    this.chunksLocator.add(chunk.name, chunk)
  }

  addChunkCollection(chunkCollection)
  {
    this.chunkCollectionsLocator.add(chunkCollection.name, chunkCollection)
  }

  getProps()
  {
    const
    atoms            = this.atomsLocator.getJSON(),
    chunks           = this.chunksLocator.getJSON(),
    chunkCollections = this.chunkCollectionsLocator.getJSON()

    return { ...atoms, ...chunks, ...chunkCollections }
  }

  getChunks()
  {
    return this.chunksLocator.getArray()
  }

  getChunkCollections()
  {
    return this.chunkCollectionsLocator.getArray()
  }

  addChunkCollectionChunk(chunks, chunk)
  {
    chunks.push(chunk)
  }

  getChunkCollectionChunks(chunks, chunkCollection)
  {
    chunkCollection.collection.forEach(this.addChunkCollectionChunk.bind(this, chunks))
  }

  getChunkCollectionsChunks()
  {
    const
    chunkCollections = this.getChunkCollections(),
    chunks           = []

    chunkCollections.forEach(this.getChunkCollectionChunks.bind(this, chunks))

    return chunks
  }
}

module.exports = Props
