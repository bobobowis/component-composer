/* eslint-disable no-undef */
define(['superhero/core/deepfind/index'], function(DeepFind)
{
  class DeepFindLocator
  {
    locate()
    {
      return new DeepFind()
    }
  }

  return DeepFindLocator
})
