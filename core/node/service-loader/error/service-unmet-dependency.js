class ServiceUnmetDependencyError extends Error
{
  constructor(...a)
  {
    super(...a)
    this.code = 'E_SERVICE_UNMET_DEPENDENCY'
  }
}

module.exports = ServiceUnmetDependencyError
