class ServiceUnableToResolveDependenciesError extends Error
{
  constructor(...a)
  {
    super(...a)
    this.code = 'E_SERVICE_UNABLE_TO_RESOLVE_DEPENDENCIES'
  }
}

module.exports = ServiceUnableToResolveDependenciesError
