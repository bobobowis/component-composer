/* eslint-disable no-undef */
define([
  'superhero/core/data-structure/multiple-associative-array/index'
], function(MultipleAssociativeArray)
{
  class MultipleAssociativeArrayFactory
  {
    constructor({
      composer
    })
    {
      this.composer = composer
    }

    create(items = {})
    {
      const args = this.composer.compose('data-structure/multiple-associative-array', { items })
      return new MultipleAssociativeArray(args)
    }
  }

  return MultipleAssociativeArrayFactory
})
