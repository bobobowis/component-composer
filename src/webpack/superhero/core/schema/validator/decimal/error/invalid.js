/* eslint-disable no-undef */
define(function()
{
  /**
   * @extends {Error}
   */
  class InvalidDecimalError extends Error
  {
    constructor(...a)
    {
      super(...a)
      this.code = 'E_INVALID_DECIMAL'
    }
  }

  return InvalidDecimalError
})
