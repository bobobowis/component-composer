/* eslint-disable no-undef */
define(function()
{
  class ServiceUnableToResolveDependenciesError extends Error
  {
    constructor(...a)
    {
      super(...a)
      this.code = 'E_SERVICE_UNABLE_TO_RESOLVE_DEPENDENCIES'
    }
  }

  return ServiceUnableToResolveDependenciesError
})

