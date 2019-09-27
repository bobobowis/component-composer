const MultipleAssociativeArray  = require('.')

class MultipleAssociativeArrayLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {MultipleAssociativeArrayLocator}
   */
  locate()
  {
    return MultipleAssociativeArray
  }
}

module.exports = MultipleAssociativeArrayLocator
