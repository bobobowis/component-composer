/* eslint-disable no-undef */
define(['superhero/core/deepclone/index'], function(DeepClone)
{
  class DeepCloneLocator
  {
    locate()
    {
      return new DeepClone()
    }
  }

  return DeepCloneLocator
})
