const InvalidBooleanError = require('./error/invalid')

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

module.exports = SchemaValidatorBoolean
