
/* eslint-disable no-undef */
define(['require', 'superhero/core/deepclone/error/failed-to-clone'], function(require)
{
  const FailedToCloneError = require('superhero/core/deepclone/error/failed-to-clone')

  class DeepClone
  {
    clone(obj)
    {
      try
      {
        return JSON.parse(JSON.stringify(obj))
      }
      catch(error)
      {
        throw new FailedToCloneError(error.message)
      }
    }
  }

  return DeepClone
})
