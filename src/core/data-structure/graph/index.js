const NodeNotExist = require('./error/node-not-exists')
class Graph
{
  constructor({
    composer,
    edges,
    nodes,
    queue,
    isDirected
  })
  {
    this.composer   = composer
    this.edges      = edges
    this.nodes      = nodes
    this.queue      = queue
    this.isDirected = isDirected
  }

  totalNodes()
  {
    return this.nodes.count()
  }

  printGraph()
  {
    const edges = this.edges.toJSON()

    for(let node in edges)
    {
      let line = `${node} ->`
      for(let edge of edges[node])
        line += ` ${edge.target} (${JSON.stringify(edge.payload)})`

      console.log(line)
    }
  }

  addNode(node)
  {
    this.nodes.add({
      id      : node.id,
      element : this.composer.compose('data-structure/node', node)
    })
  }

  addEdge({
    source,
    target,
    payload
  })
  {
    if(!this.nodes.get(source))
      throw new NodeNotExist('Source node does not exists')
    else if(!this.nodes.get(target))
      throw new NodeNotExist('Target node does not exists')

    const sourceEdge = this.composer.compose('data-structure/edge', {
      source,
      target,
      payload
    })

    this.edges.add({
      id      : source,
      element : sourceEdge
    })

    if(!this.isDirected)
    {
      const targetEdge = this.composer.compose('data-structure/edge', {
        source : target,
        target : source,
        payload
      })

      this.edges.add({
        id      : target,
        element : targetEdge
      })
    }
  }

  bfs(startNodeId)
  {
    const
    visited = { },
    path    = []

    this.queue.reset()

    if(!this.nodes.get(startNodeId))
      throw new NodeNotExist('Start node does not exists')

    visited[startNodeId] = true
    this.queue.enqueue(startNodeId)

    while(!this.queue.isEmpty())
    {
      const sourceNodeId  = this.queue.dequeue()

      path.push(sourceNodeId)

      const adjacencyList = this.edges.get(sourceNodeId)
      if(adjacencyList)
      {
        for(let edge of adjacencyList)
        {
          const targetNodeId = edge.target

          if(!visited[targetNodeId])
            this.queue.enqueue(targetNodeId)
        }
      }
    }
    return path
  }

  dfs(startNodeId)
  {
    const
    visited = { },
    path    = []

    if(!this.nodes.get(startNodeId))
      throw new NodeNotExist('Start node does not exists')

    this.recursiveDFS(startNodeId, visited, path)

    return path
  }

  recursiveDFS(nodeId, visited, path)
  {
    visited[nodeId] = true

    path.push(nodeId)

    const adjacencyList = this.edges.get(nodeId)

    if(adjacencyList)
    {
      for(let edge of adjacencyList)
      {
        const targetNodeId = edge.target
        if(!visited[targetNodeId])
          this.recursiveDFS(targetNodeId, visited, path)
      }
    }
  }

  reduceEdgeArrayToLinks(acc, nodeEdges, index)
  {
    const
    source          = Object.keys(this.edges)[index],
    edgesWithSource = nodeEdges.map((nodeEdge) =>
    {
      if(nodeEdge.source)
        return { source, ...nodeEdge }
      else
        return nodeEdge
    })

    return acc.concat(edgesWithSource)
  }

  edgesToLinks()
  {
    const
    edgesArray = this.edges.toArray().values,
    links      = edgesArray.reduce(this.reduceEdgeArrayToLinks.bind(this), [])

    return links
  }

  serialize()
  {
    const
    nodes = this.nodes.toArray().values,
    links = this.edgesToLinks()

    return {
      nodes,
      links
    }
  }

  get [Symbol.toStringTag]()
  {
    return 'Graph'
  }
}

module.exports = Graph
