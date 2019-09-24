class ComponentNotResolvableError extends Error
{
  constructor(...a)
  {
    super(...a)
    this.code = 'E_COMPONENT_NOT_RESOLVABLE'
  }
}

module.exports = ComponentNotResolvableError
