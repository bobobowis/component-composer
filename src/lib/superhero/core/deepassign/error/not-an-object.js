/* eslint-disable no-undef */
define(function()
{
  class NotAnObjectError extends Error
  {
    constructor(...args)
    {
      super(...args)

      this.code = 'E_NOT_AN_OBJECT'
    }
  }

  return NotAnObjectError
})
