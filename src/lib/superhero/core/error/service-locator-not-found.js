/* eslint-disable no-undef */
define(function()
{
  class ServiceLocatorNotFoundError extends Error
  {
    constructor(...a)
    {
      super(...a)
      this.code = 'E_SERVICE_LOCATOR_NOT_FOUND'
    }
  }

  return ServiceLocatorNotFoundError
})

