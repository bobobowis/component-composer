const InvalidJSON = require('./error/invalid-json')

/**
 * Validates Multiple Associative Array
 * @memberof Domain
 * @implements {superhero/core/schema/validator}
 */
class CustomJSONValidator
{
  constructor({
    locator
  })
  {
    this.locator = locator
  }

  valid(options, data)
  {
    options.collection
      ? this.validCollection(options, data)
      : this.validSingle(options, data)
  }

  validCollection(options, data)
  {
    if(!Array.isArray(data))
    {
      const msg = `Invalid type: "${typeof data}", array expected`
      throw new InvalidJSON(msg)
    }

    for(const item of data)
      this.validSingle(options, item)
  }

  validProperties(data, options)
  {
    const
    type              = options['custom-json'].type,
    validator         = this.locator.locate(`core/schema/validator/${type}`),
    validatorOptions  = options['custom-json'].options || {}

    for(const key in data)
    {
      try
      {
        validator.valid(validatorOptions, data[key])
      }
      catch(error)
      {
        const msg = `Invalid property "${key}": got ${typeof data[key]}, ${type} expected`
        throw new InvalidJSON(msg)
      }
    }
  }

  validSingle(options, data)
  {
    const jsonValidator = this.locator.locate(`core/schema/validator/json`)

    jsonValidator.valid(options, data)

    if(typeof data !== 'object')
    {
      const msg = `Invalid type: "${typeof data}", object expected`
      throw new InvalidJSON(msg)
    }

    if(options['custom-json'])
      this.validProperties(data, options)
  }
}

module.exports = CustomJSONValidator
