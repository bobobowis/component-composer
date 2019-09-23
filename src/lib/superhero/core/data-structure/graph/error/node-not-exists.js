/* eslint-disable no-undef */
define(function()
{
  class NodeNotExists extends Error
  {
    constructor(...args)
    {
      super(...args)

      this.code = 'E_NODE_NOT_EXISTS'
    }
  }
  return NodeNotExists
})
