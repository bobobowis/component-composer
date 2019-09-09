/* eslint-disable no-undef */
define(function()
{
  /**
   * @extends {Error}
   */
  class InvalidTimestampError extends Error
  {
    constructor(...a)
    {
      super(...a)
      this.code = 'E_INVALID_TIMESTAMP'
    }
  }

  return InvalidTimestampError
})
