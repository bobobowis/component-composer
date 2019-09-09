/* eslint-disable no-undef */
define(['require', 'superhero/core/schema/validator/boolean/error/invalid'], function(require)
{
  const InvalidBooleanError = require('superhero/core/schema/validator/boolean/error/invalid')

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
