const InvalidCsvError = require('./error/invalid')

/**
 * @implements {SchemaValidator}
 */
class SchemaValidatorCsv
{
  valid(options, data)
  {
    if(Array.isArray(data) === false)
      throw new InvalidCsvError(`Invalid type: "${typeof data}", csv (comma seperated values) string expected`)

    if(options['not-empty'] && !data.length)
      throw new InvalidCsvError('Must not be empty')

    if('min' in options && data.length < options.min)
      throw new InvalidCsvError(`Length of values must be minimum: "${options.min}" long`)

    if('max' in options && data.length > options.max)
      throw new InvalidCsvError(`Length of values can't be more then: "${options.max}" long`)

    if(options.enum && !data.every((value) => options.enum.includes(value)))
      throw new InvalidCsvError(`Expected all values of the csv to be one of the enumeral values: "${options.enum}"`)

    if(options.uppercase && !data.every((value) => value === data.toUpperCase()))
      throw new InvalidCsvError('Upper case string expected')

    if(options.lowercase && !data.every((value) => value === data.toLowerCase()))
      throw new InvalidCsvError('Lower case string expected')
  }
}

module.exports = SchemaValidatorCsv
