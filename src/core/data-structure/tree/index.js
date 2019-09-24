const
Graph        = require('../graph'),
NodeNotExist = require('../graph/error/node-not-exists')

class Tree extends Graph
{
  constructor({
    root,
    deepassign,
    ...args
  })
  {
    super(args)
    this.deepassign = deepassign
    this.root       = root
  }
  setRoot(rootNodeId)
  {
    if(!this.nodes.get(rootNodeId))
      throw new NodeNotExist('Node does not exists')

    this.root = rootNodeId
  }

  getLeaves()
  {
    const
    nodeIdList = Object.keys(this.nodes.items),
    leaves     = nodeIdList.filter((nodeId) =>
    {
      return !this.edges.get(nodeId)
    })

    return leaves
  }

  getJSON(flattened)
  {
    if(!this.nodes.get(this.root))
      throw new NodeNotExist('Root does not exists')

    const bfs = this.bfs(this.root)

    let json = {}

    bfs.forEach((nodeId, nodeIndex) =>
    {
      const
      node      = this.nodes.get(nodeId),
      jsonPath  = this.getJSONPath(nodeId, nodeIndex, bfs, node.name)

      if(flattened)
        json[jsonPath] = { ...node }
      else
        json = this.deepassign.assign(json, jsonPath, { ...node })
    })

    return json
  }

  getJSONPath(nodeId, nodeIndex, path, jsonPath)
  {
    const previousIndex = nodeIndex - 1

    let parent
    for(let i = previousIndex; i >= 0; i--)
    {
      const
      previousNodeId    = path[i],
      previousNodeEdges = this.edges.get(previousNodeId)

      if(previousNodeEdges)
      {
        const currentNodeEdge = previousNodeEdges.find((previousNodeEdge) =>
        {
          return previousNodeEdge.target === nodeId
        })

        if(currentNodeEdge)
        {
          parent = previousNodeId
          break
        }
      }
    }

    if(parent)
    {
      const
      parentNode  = this.nodes.get(parent),
      parentIndex = path.findIndex((element) =>
      {
        return element === parent
      })

      return this.getJSONPath(parent, parentIndex, path, `${parentNode.name}.${jsonPath}`)
    }
    else
    {
      return jsonPath
    }
  }

  get [Symbol.toStringTag]()
  {
    return 'Tree'
  }
}

module.exports = Tree
