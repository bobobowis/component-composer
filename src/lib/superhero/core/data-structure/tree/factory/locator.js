/* eslint-disable no-undef */
define([
  'superhero/core/data-structure/tree/factory/index',
  'superhero/core/locator/constituent'
], function(TreeFactory, LocatorConstituent)
{
  /**
   * @extends {@superhero/core/locator/constituent}
   */
  class TreeLocator extends LocatorConstituent
  {
    /**
     * @returns {Tree}
     */
    locate()
    {
      const
      associativeArrayFactory         = this.locator.locate('data-structure/associative-array/factory'),
      multipleAssociativeArrayFactory = this.locator.locate('data-structure/multiple-associative-array/factory'),
      queueFactory                    = this.locator.locate('data-structure/queue/factory'),
      composer                        = this.locator.locate('core/schema/composer'),
      deepassign                      = this.locator.locate('core/deepassign')


      return new TreeFactory({
        composer,
        associativeArrayFactory,
        multipleAssociativeArrayFactory,
        queueFactory,
        deepassign
      })
    }
  }

  return TreeLocator
})
