const
DeepAssign          = require('.'),
LocatorConstituent  = require('../locator/constituent')
/**
 * @extends {superhero/core/locator/constituent}
 */
class DeepAssignLocator extends LocatorConstituent
{
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
