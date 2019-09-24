const AssociativeArray  = require('.')

class AssociativeArrayLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {AssociativeArrayLocator}
   */
  locate()
  {
    return AssociativeArray
  }
}

module.exports = AssociativeArrayLocator
