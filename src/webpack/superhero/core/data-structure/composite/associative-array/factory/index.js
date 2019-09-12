/* eslint-disable no-undef */
define([
  'superhero/core/data-structure/composite/associative-array/index'
], function(AssociativeArray)
{
  class AssociativeArrayFactory
  {
    create(items = {})
    {
      return new AssociativeArray(items)
    }
  }

  return AssociativeArrayFactory
})
