/* eslint-disable no-undef */
define(['superhero/core/schema/validator/timestamp/error/invalid'], function(InvalidTimestampError)
{
  /**
   * @implements {SchemaValidator}
   */
  class SchemaValidatorTimestamp
  {
    valid(options, data)
    {
      if(typeof data !== 'string')
        throw new InvalidTimestampError(`Invalid type: "${typeof data}", string expected`)

      const date = new Date(data)

      if('min' in options && date.getTime() < new Date(options.min).getTime())
        throw new InvalidTimestampError(`Timestamp must be at least: "${options.min}"`)

      if('max' in options && date.getTime() > new Date(options.max).getTime())
        throw new InvalidTimestampError(`Timestamp can't be more then: "${options.max}"`)

      if('gt' in options && date.getTime() > new Date(options.gt).getTime())
        throw new InvalidTimestampError(`Timestamp must be more then: "${options.gt}" long`)

      if('lt' in options && date.getTime() < new Date(options.lt).getTime())
        throw new InvalidTimestampError(`Timestamp must be less then: "${options.lt}" long`)

      if(options.enum && !options.enum.includes(data))
        throw new InvalidTimestampError(`Expected one of the enumeral values: "${options.enum}"`)
    }
  }

  return SchemaValidatorTimestamp
})
