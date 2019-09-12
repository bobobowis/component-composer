/* eslint-disable no-undef */
define([
  'superhero/core/data-structure/schema/validator/associative-array/error/invalid-associative-array'
], function(InvalidAssociativeArray)
{
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
      customJSONValidator = this.locator.locate(`core/schema/validator/data-structure/custom-json`),
      customJSONOptions   = {
        'custom-json' : options['associative-array']
      }

      customJSONValidator.valid(customJSONOptions, data)
    }

    validSingle(options, data)
    {
      if(typeof data !== 'object')
        throw new InvalidAssociativeArray(`Invalid type: "${typeof data}", object expected`)

      if(typeof data['array'] !== 'object')
        throw new InvalidAssociativeArray(`Invalid array property: "${typeof data}", object expected`)

      if(options['associative-array'])
        this.validArrayProperty(data['array'], options)
    }
  }

  return AssociativeArrayValidator
})

