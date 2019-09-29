const DeepMerge = require('.')

class DeepMergeLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new DeepMerge()
  }
}

module.exports = DeepMergeLocator
