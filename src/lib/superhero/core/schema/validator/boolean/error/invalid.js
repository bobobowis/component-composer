/* eslint-disable no-undef */
define(function()
{
  /**
   * @extends {Error}
   */
  class InvalidBooleanError extends Error
  {
    constructor(...a)
    {
      super(...a)
      this.code = 'E_INVALID_BOOLEAN'
    }
  }

  return InvalidBooleanError
})