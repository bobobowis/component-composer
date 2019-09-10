/* eslint-disable no-undef */
define(['superhero/core/deepfreeze/index'], function(DeepFreeze)
{
  class DeepFreezeLocator
  {
    locate()
    {
      return new DeepFreeze()
    }
  }

  return DeepFreezeLocator
})
