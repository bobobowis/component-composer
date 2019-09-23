const InvalidMultipleAssociativeArray = require('./error/invalid-multiple-associative-array')
/**
 * Validates Associative Array
 * @memberof Domain
 * @implements {superhero/core/schema/validator}
 */
class MultipleAssociativeArrayValidator
{
  constructor(associativeArrayValidator)
  {
    this.associativeArrayValidator = associativeArrayValidator
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
      throw new InvalidMultipleAssociativeArray(`Invalid type: "${typeof data}", array expected`)

    for(const item of data)
      this.validSingle(options, item)
  }


  validSingle(options, data)
  {
    if(typeof data !== 'object')
      throw new InvalidMultipleAssociativeArray(`Invalid type: "${typeof data}", object expected`)

    const associativeArrayOptions = {
      'associative-array' :
      {
        'type'    : options['associative-array'] && options['associative-array'].type ? options['associative-array'].type : 'collection',
        'options' : options['associative-array'] && options['associative-array'].options ? options['associative-array'].options : {}
      }
    }

    this.associativeArrayValidator.valid(associativeArrayOptions, data)
  }
}

module.exports = MultipleAssociativeArrayValidator
