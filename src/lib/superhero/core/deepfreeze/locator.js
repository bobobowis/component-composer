/* eslint-disable no-undef */
define(['require', 'superhero/core/deepfreeze/index'], function(require)
{
  const DeepFreeze = require('superhero/core/deepfreeze/index')

  class DeepFreezeLocator
  {
    locate()
    {
      return new DeepFreeze()
    }
  }

  return DeepFreezeLocator
})
