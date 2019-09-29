const InvalidAssociativeArray = require('./error/invalid-associative-array')
/**
 * Validates Multiple Associative Array
 * @memberof Domain
 * @implements {superhero/core/schema/validator}
 */
class AssociativeArrayValidator
{
  constructor(locator)
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
      throw new InvalidAssociativeArray(`Invalid type: "${typeof data}", array expected`)

    for(const item of data)
      this.validSingle(options, item)
  }

  validArrayProperty(data, options)
  {
    const
    customJSONValidator = this.locator.locate(`core/schema/validator/custom-json`),
    customJSONOptions   = {
      'custom-json' : options['associative-array']
    }

    customJSONValidator.valid(customJSONOptions, data)
  }

  validSingle(options, data)
  {
    if(typeof data !== 'object')
      throw new InvalidAssociativeArray(`Invalid type: "${typeof data}", object expected`)

    if(typeof data['items'] !== 'object')
      throw new InvalidAssociativeArray(`Invalid items property: "${typeof data}", object expected`)

    if(options['associative-array'])
      this.validArrayProperty(data['items'], options)
  }
}

module.exports = AssociativeArrayValidator
