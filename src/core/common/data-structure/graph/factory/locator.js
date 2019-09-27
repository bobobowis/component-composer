const GraphFactory = require('.')

class GraphLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

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

module.exports = GraphLocator
