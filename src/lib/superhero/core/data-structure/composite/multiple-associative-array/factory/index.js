/* eslint-disable no-undef */
define([
  'superhero/core/data-structure/composite/multiple-associative-array/index'
], function(MultipleAssociativeArray)
{
  class MultipleAssociativeArrayFactory
  {
    create(items = {})
    {
      return new MultipleAssociativeArray(items)
    }
  }

  return MultipleAssociativeArrayFactory
})
