
/* eslint-disable no-undef */
define(['require', 'superhero/core/schema/validator/string/error/invalid'], function(require)
{
  const InvalidStringError = require('superhero/core/schema/validator/string/error/invalid')

  /**
   * @implements {SchemaValidator}
   */
  class SchemaValidatorString
  {
    valid(options, data)
    {
      if(typeof data !== 'string')
        throw new InvalidStringError(`Invalid type: "${typeof data}", string expected`)

      if(options['not-empty'] && !data.length)
        throw new InvalidStringError(`Must not be empty`)

      if('min' in options && data.length < options.min)
        throw new InvalidStringError(`String length must be minimum: "${options.min}" long`)

      if('max' in options && data.length > options.max)
        throw new InvalidStringError(`String length can't be more then: "${options.max}" long`)

      if(options.enum && !options.enum.includes(data))
        throw new InvalidStringError(`Expected one of the enumeral values: "${options.enum}"`)

      if(options.uppercase && data !== data.toUpperCase())
        throw new InvalidStringError('Uppercase string expected')

      if(options.lowercase  && data !== data.toLowerCase())
        throw new InvalidStringError('Lower case string expected')
    }
  }

  return SchemaValidatorString
})
