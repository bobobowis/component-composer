const TreeFactory = require('.')

class TreeFactoryLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {TreeFactory}
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

module.exports = TreeFactoryLocator
