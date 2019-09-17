/* eslint-disable no-undef */
define([
  'superhero/core/data-structure/stack/index'
], function(Stack)
{
  class StackFactory
  {
    constructor({
      composer
    })
    {
      this.composer = composer
    }

    create(items = [])
    {
      const args = this.composer.compose('data-structure/stack', { items })
      return new Stack(args)
    }
  }

  return StackFactory
})
