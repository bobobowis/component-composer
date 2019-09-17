/* eslint-disable no-undef */
define([
  'superhero/core/data-structure/associative-array/index'
], function(AssociativeArray)
{
  class AssociativeArrayFactory
  {
    constructor({
      composer
    })
    {
      this.composer = composer
    }

    create(items = {})
    {
      const args = this.composer.compose('data-structure/associative-array', { items })
      return new AssociativeArray(args)
    }
  }

  return AssociativeArrayFactory
})
