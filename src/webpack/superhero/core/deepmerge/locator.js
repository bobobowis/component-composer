/* eslint-disable no-undef */
define(['superhero/core/deepmerge'], function(DeepMerge)
{
  class DeepMergeLocator
  {
    locate()
    {
      return new DeepMerge()
    }
  }

  return DeepMergeLocator
})
