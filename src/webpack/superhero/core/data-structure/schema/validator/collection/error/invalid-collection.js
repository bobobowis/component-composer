/* eslint-disable no-undef */
define(function()
{
  /**
   * @memberof Domain
   * @extends {Error}
   */
  class InvalidCollectionError extends Error
  {
    constructor(...args)
    {
      super(...args)
      this.code = 'E_INVALID_COLLECTION'
    }
  }

  return InvalidCollectionError
})
