class NodeNotExists extends Error
{
  constructor(...args)
  {
    super(...args)

    this.code = 'E_NODE_NOT_EXISTS'
  }
}
module.exports = NodeNotExists
