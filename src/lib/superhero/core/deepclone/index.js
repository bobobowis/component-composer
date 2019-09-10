
/* eslint-disable no-undef */
define(['superhero/core/deepclone/error/failed-to-clone'], function(FailedToCloneError)
{
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
