/* eslint-disable no-undef */
define(['superhero/core/data-structure/graph/index'], function(Graph)
{
  /**
   * @extends {@superhero/core/locator/constituent}
   */
  class GraphFactory
  {
    constructor({
      composer,
      associativeArrayFactory,
      multipleAssociativeArrayFactory,
      queueFactory
    })
    {
      this.composer                         = composer
      this.associativeArrayFactory          = associativeArrayFactory
      this.multipleAssociativeArrayFactory  = multipleAssociativeArrayFactory
      this.queueFactory                     = queueFactory

      this[Symbol.for('schema')]            = 'data-structure/graph'
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
     * @returns {Graph}
     */
    create(graph)
    {
      const composedGraph = this.composer.compose(this[Symbol.for('schema')], graph)

      return new Graph({
        ...composedGraph,
        composer : this.composer,
        edges    : this.createEdges(composedGraph),
        nodes    : this.createNodes(composedGraph),
        queue    : this.createQueue()
      })
    }

    get [Symbol.toStringTag]()
    {
      return 'GraphFactory'
    }
  }

  return  GraphFactory
})
