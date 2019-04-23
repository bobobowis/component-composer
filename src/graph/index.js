const Queue = require('./queue')

class Graph
{
  constructor(totalVertices)
  {
    this.totalVertices = totalVertices
    this.adjacencyList = new Map()
  }

  addVertex(v)
  {
    this.adjacencyList.set(v, [])
  }

  addEdge(v, w)
  {
    this.adjacencyList.get(v).push(w)
    this.adjacencyList.get(w).push(v)
  }

  getVisitedList()
  {
    const visited = new Array(this.totalVertices)

    visited.fill(false, 0, this.totalVertices - 1)

    return visited
  }

  bfs(startingVertex, callback)
  {
    const
    visited = this.getVisitedList(),
    queue = new Queue()

    visited[startingVertex] = true
    queue.enqueue(startingVertex)

    while(!queue.isEmpty())
    {
      const
      vertex        = queue.dequeue(),
      adjacencyList = this.adjacencyList.get(vertex)

      if(callback)
        callback(vertex)

      adjacencyList.forEach((adjacentVertex) =>
      {
        if(!visited[adjacentVertex])
        {
          visited[adjacentVertex] = true
          queue.enqueue(adjacentVertex)
        }
      })
    }
  }

  dfs(startingVertex, callback)
  {
    const visited = this.getVisitedList()

    this.DFSUtil(startingVertex, visited, callback)
  }

  DFSUtil(vertex, visited, callback)
  {
    visited[vertex] = true

    if(callback)
      callback(vertex)

    const adjacencyList = this.adjacencyList.get(vertex)

    adjacencyList.forEach((adjacentVertex) =>
    {
      if(!visited[adjacentVertex])
        this.DFSUtil(adjacentVertex, visited)
    })
  }
}

module.exports = Graph
