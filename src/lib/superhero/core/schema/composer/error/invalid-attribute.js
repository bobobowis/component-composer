/* eslint-disable no-undef */
define(function()
{
  /**
   * @extends {Error}
   */
  class InvalidAttributeError extends Error
  {
    constructor(...a)
    {
      super(...a)
      this.code = 'E_SCHEMA_INVALID_ATTRIBUTE'
    }
  }

  return InvalidAttributeError
})
