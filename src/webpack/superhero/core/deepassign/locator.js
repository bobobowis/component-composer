/* eslint-disable no-undef */
define(['superhero/core/deepassign/index', 'superhero/core/locator/constituent'], function(DeepAssign, LocatorConstituent)
{
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

  return DeepAssignLocator
})
