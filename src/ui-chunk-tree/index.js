class UIChunkTree
{
  constructor(chunksLocator, adjacencyLocator, rootChunk)
  {
    this.chunks           = chunksLocator
    this.adjacencyLocator = adjacencyLocator

    this.addLeaf(rootChunk)
  }

  addChunk(chunk)
  {
    this.chunks[chunk.id] = chunk
  }

  addChild(parent, child)
  {
    this.addLeaf(child)
    this.addEdge(parent, child)
    this.addEdge(child, parent)
  }

  addChildren(chunk)
  {
    const
    chunks                 = chunk.props.getChunks(),
    chunkCollectionsChunks = chunk.props.getChunkCollectionsChunks(),
    children               = [...chunks, ...chunkCollectionsChunks],
    parent                 = chunk

    children.forEach(this.addChild.bind(this, parent))
  }

  addEdge(parent, chunk)
  {
    const list = this.adjacencyLocator.get(parent.id)

    list.push(chunk.id)
  }

  addParent(chunk, parent)
  {
    chunk.parent = parent.id
  }

  addLeaf(chunk)
  {
    this.addChunk(chunk)
    this.createAdjacencyList(chunk)
    this.addChildren(chunk)
  }

  createAdjacencyList(chunk)
  {
    this.adjacencyLocator.add(chunk.id, [])
  }

  getProps(leaf, visited = {})
  {
    const
    id       = leaf.id,
    props    = { ...leaf.props.getProps() },
    children = this.adjacencyLocator.get(id)

    visited[id] = true

    children.forEach((child) =>
    {
      if(!visited[child.id])
        props[child.name] = this.getProps(child, visited)
    })

    return props
  }
}

module.exports = UIChunkTree
