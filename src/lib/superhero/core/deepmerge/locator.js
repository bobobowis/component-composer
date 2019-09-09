/* eslint-disable no-undef */
define(['require', 'superhero/core/deepmerge'], function(require)
{
  const DeepMerge = require('superhero/core/deepmerge')

  class DeepMergeLocator
  {
    locate()
    {
      return new DeepMerge()
    }
  }

  return DeepMergeLocator
})
