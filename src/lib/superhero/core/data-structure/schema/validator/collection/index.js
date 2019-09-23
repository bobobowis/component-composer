const InvalidArray = require('./error/invalid-collection')
/**
 * Validates Collection
 * @memberof Core
 * @implements {superhero/core/schema/validator}
 */
class CollectionValidator
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
      throw new InvalidArray(`Invalid type: "${typeof data}", array expected`)

    for(const item of data)
      this.validSingle(options, item)
  }

  validCollectionElements(data, options)
  {
    const
    type              = options['collection-type'],
    validator         = this.locator.locate(`core/schema/validator/${type}`),
    collectionOptions = options['collection-options'] || {}

    for(const element of data)
      validator.valid(collectionOptions, element)
  }

  validSingle(options, data)
  {
    if(!Array.isArray(data))
      throw new InvalidArray(`Invalid type: "${typeof data}", array expected`)
    else if(options['collection-type'])
      this.validCollectionElements(data, options)
  }
}

module.exports = CollectionValidator
