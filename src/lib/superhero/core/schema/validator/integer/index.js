/* eslint-disable no-undef */
define(['require', 'superhero/core/schema/validator/integer/error/invalid'], function(require)
{
  const InvalidIntegerError = require('superhero/core/schema/validator/integer/error/invalid')

  /**
   * @implements {SchemaValidator}
   */
  class SchemaValidatorInteger
  {
    valid(options, data)
    {
      if(typeof data !== 'number')
        throw new InvalidIntegerError(`Invalid type: "${typeof data}", number expected`)

      if(data !== parseInt(data))
        throw new InvalidIntegerError('Integer expected, found decimals')

      if(options.unsigned && data < 0)
        throw new InvalidIntegerError('Expected an unsigned integer')

      if('min' in options && data < options.min)
        throw new InvalidIntegerError(`Integer must be minimum: "${options.min}"`)

      if('max' in options && data > options.max)
        throw new InvalidIntegerError(`Integer can't be more then: "${options.max}"`)

      if('gt' in options && data < options.gt)
        throw new InvalidIntegerError(`Integer must be more then: "${options.gt}"`)

      if('lt' in options && data > options.lt)
        throw new InvalidIntegerError(`Integer must be less then: "${options.lt}"`)

      if(options.enum && !options.enum.includes(data))
        throw new InvalidIntegerError(`Expected one of the enumeral values: "${options.enum}"`)
    }
  }

  return SchemaValidatorInteger
})
