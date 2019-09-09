/* eslint-disable no-undef */
define(['require', 'superhero/core/deepfind/index'], function(require)
{
  const DeepFind = require('superhero/core/deepfind/index')

  class DeepFindLocator
  {
    locate()
    {
      return new DeepFind()
    }
  }

  return DeepFindLocator
})
