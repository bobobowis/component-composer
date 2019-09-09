/* eslint-disable no-undef */
define(['require', 'superhero/core/deepclone/index'], function(require)
{
  const DeepClone = require('superhero/core/deepclone/index')

  class DeepCloneLocator
  {
    locate()
    {
      return new DeepClone()
    }
  }

  return DeepCloneLocator
})
