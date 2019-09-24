class ComponentNotResolvableError extends Error
{
  constructor(...a)
  {
    super(...a)
    this.code = 'E_COULD_NOT_WRITE_CONFIG'
  }
}

module.exports = ComponentNotResolvableError
