const Stack  = require('.')

class StackLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {Stack}
   */
  locate()
  {
    return Stack
  }
}

module.exports = StackLocator
