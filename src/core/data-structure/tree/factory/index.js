const Tree = require('..')

class TreeFactory
{
  constructor({
    composer,
    associativeArrayFactory,
    multipleAssociativeArrayFactory,
    queueFactory,
    deepassign
  })
  {
    this.composer                         = composer
    this.associativeArrayFactory          = associativeArrayFactory
    this.multipleAssociativeArrayFactory  = multipleAssociativeArrayFactory
    this.queueFactory                     = queueFactory
    this.deepassign                       = deepassign

    this[Symbol.for('schema')]            = 'data-structure/tree'
  }

  createEdges({ edges })
  {
    const { items } = edges
    return this.multipleAssociativeArrayFactory.create(items)
  }

  createNodes({ nodes })
  {
    const { items } = nodes
    return this.associativeArrayFactory.create(items)
  }

  createQueue()
  {
    return this.queueFactory.create()
  }

  /**
   * @returns {Tree}
   */
  create(tree)
  {
    const composedTree = this.composer.compose(this[Symbol.for('schema')], tree)

    return new Tree({
      ...composedTree,
      composer   : this.composer,
      edges      : this.createEdges(composedTree),
      nodes      : this.createNodes(composedTree),
      queue      : this.createQueue(),
      deepassign : this.deepassign
    })
  }

  get [Symbol.toStringTag]()
  {
    return 'TreeFactory'
  }
}

module.exports = TreeFactory
