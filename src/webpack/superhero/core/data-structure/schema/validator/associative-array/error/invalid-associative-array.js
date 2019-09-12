/* eslint-disable no-undef */
define(function()
{
  /**
   * @memberof Domain
   * @extends {Error}
   */
  class InvalidAssociativeArrayError extends Error
  {
    constructor(...args)
    {
      super(...args)
      this.code = 'E_INVALID_ASSOCIATIVE_ARRAY'
    }
  }

  return InvalidAssociativeArrayError
})
