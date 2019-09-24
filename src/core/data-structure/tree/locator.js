const Tree = require('.')

class TreeLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return Tree
  }
}

module.exports = TreeLocator
