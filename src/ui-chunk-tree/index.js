class UIChunkTree
{
  constructor(chunksLocator, rootChunk)
  {
    this.chunks        = chunksLocator
    this.adjacencyList = new Map()

    this.addLeaf(rootChunk)
  }


  addChunk(uiChunkNode)
  {
    const chunk = uiChunkNode.element

    this.chunks[chunk.id] = chunk
  }

  addChild(parent, child)
  {
    this.addLeaf(child)
    this.addEdge(parent, child)
  }

  addChildren(uiChunkNode)
  {
    const
    children = uiChunkNode.children,
    parent   = uiChunkNode.element

    children.forEach(this.addChild.bind(this, parent))
  }

  addEdge(parent, uiChunkNode)
  {
    const list = this.adjacencyList.get(parent.element.id)

    list.push(uiChunkNode.element.id)
  }

  addLeaf(uiChunkNode)
  {
    this.addChunk(uiChunkNode)
    this.createAdjacencyList(uiChunkNode)
    this.addChildren(uiChunkNode)
  }

  createAdjacencyList(uiChunkNode)
  {
    this.adjacencyList.set(uiChunkNode.element.id, [])
  }

  getProps(leaf, visited = {})
  {
    const
    id       = leaf.element.id,
    props    = { ...leaf.element.props },
    children = this.adjacencyList.get(id)

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
