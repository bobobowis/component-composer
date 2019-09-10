/* eslint-disable no-undef */
define(['superhero/core/schema/validator/json/error/invalid'], function(InvalidJsonError)
{
  /**
   * @implements {SchemaValidator}
   */
  class SchemaValidatorJson
  {
    valid(options, data)
    {
      try
      {
        options.stringified ? JSON.parse(data) : JSON.stringify(data)
      }
      catch(error)
      {
        throw new InvalidJsonError('Unparsable JSON provided')
      }
    }
  }

  return SchemaValidatorJson
})
