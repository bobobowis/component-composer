/* eslint-disable no-undef */
define(['superhero/core/data-structure/tree/index'], function(Tree)
{
  class TreeLocator
  {
    constructor(locator)
    {
      this.locator = locator
    }

    locate()
    {
      return Tree
    }
  }

  return TreeLocator
})
