/* eslint-disable no-undef */
define([
  'superhero/core/data-structure/graph/factory/index',
  'superhero/core/locator/constituent'
], function(GraphFactory, LocatorConstituent)
{
  /**
   * @extends {@superhero/core/locator/constituent}
   */
  class GraphLocator extends LocatorConstituent
  {
    /**
     * @returns {Graph}
     */
    locate()
    {
      const
      associativeArrayFactory         = this.locator.locate('data-structure/associative-array/factory'),
      multipleAssociativeArrayFactory = this.locator.locate('data-structure/multiple-associative-array/factory'),
      queueFactory                    = this.locator.locate('data-structure/queue/factory'),
      composer                        = this.locator.locate('core/schema/composer')


      return new GraphFactory({
        composer,
        associativeArrayFactory,
        multipleAssociativeArrayFactory,
        queueFactory
      })
    }
  }

  return GraphLocator
})
