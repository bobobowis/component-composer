const DeepAssign = require('.')

class DeepAssignLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {DeepAssign}
   */
  locate()
  {
    const deepclone = this.locator.locate('core/deepclone')

    return new DeepAssign(deepclone)
  }
}

module.exports = DeepAssignLocator
