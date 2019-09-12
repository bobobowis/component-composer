/* eslint-disable no-undef */
define(function()
{
  /**
   * @extends {Error}
   */
  class InvalidCollectionError extends Error
  {
    constructor(...a)
    {
      super(...a)
      this.code = 'E_INVALID_COLLECTION'
    }
  }

  return InvalidCollectionError
})
