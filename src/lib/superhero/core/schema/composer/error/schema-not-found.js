/* eslint-disable no-undef */
define(function()
{
  /**
   * @extends {Error}
   */
  class SchemaNotFoundError extends Error
  {
    constructor(...a)
    {
      super(...a)
      this.code = 'E_SCHEMA_NOT_FOUND'
    }
  }

  return SchemaNotFoundError
})
