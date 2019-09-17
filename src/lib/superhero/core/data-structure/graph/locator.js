/* eslint-disable no-undef */
define(['superhero/core/data-structure/graph/index'], function(Graph)
{
  class GraphLocator
  {
    constructor(locator)
    {
      this.locator = locator
    }

    locate()
    {
      return Graph
    }
  }

  return GraphLocator
})
