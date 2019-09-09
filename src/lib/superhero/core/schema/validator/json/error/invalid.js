/* eslint-disable no-undef */
define(function()
{
  /**
   * @extends {Error}
   */
  class InvalidJsonError extends Error
  {
    constructor(...a)
    {
      super(...a)
      this.code = 'E_INVALID_JSON'
    }
  }

  return InvalidJsonError
})
