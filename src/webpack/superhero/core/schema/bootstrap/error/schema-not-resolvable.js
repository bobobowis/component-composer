// eslint-disable-next-line no-undef
define(function()
{
  class SchemaNotResolvableError extends Error
  {
    constructor(...a)
    {
      super(...a)
      this.code = 'E_SCHEMA_NOT_RESOLVABLE'
    }
  }

  return SchemaNotResolvableError
})
