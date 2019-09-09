/* eslint-disable no-undef */
define(function()
{
  class ServiceUndefinedError extends ReferenceError
  {
    constructor(...a)
    {
      super(...a)
      this.code = 'E_SERVICE_UNDEFINED'
    }
  }

  return ServiceUndefinedError
})

