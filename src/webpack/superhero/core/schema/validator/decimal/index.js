/* eslint-disable no-undef */
define(['superhero/core/schema/validator/decimal/error/invalid'], function(InvalidDecimalError)
{
  /**
   * @implements {SchemaValidator}
   */
  class SchemaValidatorDecimal
  {
    valid(options, data)
    {
      if(typeof data !== 'number')
        throw new InvalidDecimalError(`Invalid type: "${typeof data}", number expected`)

      if(options.unsigned && data < 0)
        throw new InvalidDecimalError('Expected an unsigned decimal')

      if('min' in options && data < options.min)
        throw new InvalidDecimalError(`Decimal must be minimum: "${options.min}"`)

      if('max' in options && data > options.max)
        throw new InvalidDecimalError(`Decimal can't be more then: "${options.max}"`)

      if('gt' in options && data > options.gt)
        throw new InvalidDecimalError(`Decimal must be more then: "${options.gt}"`)

      if('lt' in options && data < options.lt)
        throw new InvalidDecimalError(`Decimal must be less then: "${options.lt}"`)

      if(options.enum && !options.enum.includes(data))
        throw new InvalidDecimalError(`Expected one of the enumeral values: "${options.enum}"`)
    }
  }

  return SchemaValidatorDecimal
})
