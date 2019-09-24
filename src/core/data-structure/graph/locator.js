const Graph = require('.')

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

module.exports = GraphLocator
