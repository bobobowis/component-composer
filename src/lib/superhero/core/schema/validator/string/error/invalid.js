/* eslint-disable no-undef */
define(function()
{
  /**
   * @extends {Error}
   */
  class InvalidStringError extends Error
  {
    constructor(...a)
    {
      super(...a)
      this.code = 'E_INVALID_STRING'
    }
  }

  return InvalidStringError
})
