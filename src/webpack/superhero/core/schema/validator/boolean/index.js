/* eslint-disable no-undef */
define(['superhero/core/schema/validator/boolean/error/invalid'], function(InvalidBooleanError)
{
  /**
   * @implements {SchemaValidator}
   */
  class SchemaValidatorBoolean
  {
    valid(options, data)
    {
      if(typeof data !== 'boolean')
        throw new InvalidBooleanError(`Invalid type: "${typeof data}", boolean expected`)
    }
  }

  return SchemaValidatorBoolean
})
