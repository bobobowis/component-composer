/* eslint-disable no-undef */
define(function()
{
  /**
   * @extends {Error}
   */
  class InvalidIntegerError extends Error
  {
    constructor(...a)
    {
      super(...a)
      this.code = 'E_INVALID_INTEGER'
    }
  }

  return InvalidIntegerError
})
