/* eslint-disable no-undef */
define(function()
{
  class DeepFind
  {
    find(path, obj)
    {
      // split on "." or "/"
      const keys = path.split(/\.|\//)
      return keys.reduce((obj, key) => obj && obj[key], obj)
    }
  }

  return DeepFind
})
