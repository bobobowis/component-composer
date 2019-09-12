/* eslint-disable no-undef */
define(function()
{
  /**
   * @extends {Error}
   */
  class MissingSchemaDefinitionError extends Error
  {
    constructor(...a)
    {
      super(...a)
      this.code = 'E_MISSING_SCHEMA_DEFINITION'
    }
  }

  return MissingSchemaDefinitionError
})
