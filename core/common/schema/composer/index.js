const
InvalidAttributeError               = require('./error/invalid-attribute'),
InvalidCollectionError              = require('./error/invalid-collection'),
InvalidSchemaError                  = require('./error/invalid-schema'),
SchemaNotFoundError                 = require('./error/schema-not-found'),
FilterIsNotHoneringContractError    = require('./error/filter-is-not-honering-contract'),
ValidatorIsNotHoneringContractError = require('./error/validator-is-not-honering-contract'),
ValidatorNotFoundError              = require('./error/validator-not-found')

class SchemaComposer
{
  constructor(deepmerge, deepclone, deepfreeze)
  {
    this.deepmerge  = deepmerge
    this.deepclone  = deepclone
    this.deepfreeze = deepfreeze
    this.schemas    = {}
    this.filters    = {}
    this.validators = {}
  }

  /**
   * @param {string} schemaName
   * @param {Object|Array<Object>} dto
   *
   * @throws {E_SCHEMA_NOT_FOUND}
   * @throws {E_VALIDATOR_NOT_FOUND}
   * @throws {E_SCHEMA_INVALID_ATTRIBUTE}
   *
   * @returns {Object}
   */
  compose(schemaName, dto)
  {
    if(schemaName in this.schemas === false)
      throw new SchemaNotFoundError(`Schema: "${schemaName}" not found`)

    if(Array.isArray(dto))
      dto = this.deepmerge.merge({}, ...dto)

    const
    schema = this.buildSchema(this.schemas[schemaName]),
    output = {}

    for(const attribute in schema)
      output[attribute] = this.attribute(schemaName, schema, attribute, dto[attribute])

    if(Object.isFrozen(schema))
      this.deepfreeze.freeze(output)

    return output
  }

  /**
   * @param {string} schemaName
   * @param {string} attribute
   * @param {Object} data
   *
   * @throws {E_SCHEMA_NOT_FOUND}
   * @throws {E_VALIDATOR_NOT_FOUND}
   * @throws {E_SCHEMA_INVALID_ATTRIBUTE}
   *
   * @returns {*}
   */
  trait(schemaName, attribute, data)
  {
    if(schemaName in this.schemas === false)
      throw new SchemaNotFoundError(`Schema: "${schemaName}" not found`)

    const
    schema = this.schemas[schemaName],
    output = this.attribute(schemaName, schema, attribute, data)

    return output
  }

  /**
   * @private
   */
  attribute(schemaName, schema, attribute, data)
  {
    const options = schema[attribute]

    if('default' in options && data === undefined)
      data = options.default

    // if optional, and undefined or null, then we don't need to filter or validate
    if(options.optional === true && data === undefined)
      return data

    if(options.nullable === true && data === null)
      return data

    // Filtering attributes if a filter has been defined for the type
    if(options.type in this.filters)
    {
      const filter = this.filters[options.type]
      data = filter.filter(options, data)
    }

    // Validating type
    if(options.type in this.validators === false)
      throw new ValidatorNotFoundError(`In schema: "${schemaName}", validator: "${options.type}" not found`)

    try
    {
      const validator = this.validators[options.type]

      if(options.collection)
      {
        if(!Array.isArray(data))
          throw new InvalidCollectionError(`In schema: "${schemaName}", invalid type: "${typeof data}", array expected`)

        for(const item of data)
          validator.valid(options, item)
      }
      else
      {
        validator.valid(options, data)
      }
    }
    catch(error)
    {
      throw new InvalidAttributeError(`Invalid attribute: "${attribute}", schema: "${schemaName}", error: ${error.message}`)
    }

    return data
  }

  /**
   * The schema could have declared a meta field that requires a building process before used
   * The build process will alter the schema provided through an argument
   *
   * @param {Object} schema
   * @return {Object} Same instance as provided through argument
   */
  buildSchema(schema)
  {
    if('@meta' in schema)
    {
      if('extends' in schema['@meta'] || 'extend' in schema['@meta'])
      {
        const extendList = schema['@meta'].extends || schema['@meta'].extend

        for(const extendSchemaName of Array.isArray(extendList) ? extendList : [extendList])
        {
          const extend = this.buildSchema(this.schemas[extendSchemaName])
          this.deepmerge.merge(schema, extend)
        }
      }

      if(schema['@meta'].immutable || schema['@meta'].immutable === undefined) // TODO makes sense if not exist to make the schema frozen?
      {
        delete schema['@meta']
        Object.freeze(schema)
      }
      else
      {
        delete schema['@meta']
      }
    }

    return schema
  }

  /**
   * @param {string} schemaName
   * @param {Object} schema
   * @throws {E_SCHEMA_INVALID_SCHEMA}
   */
  addSchema(schemaName, schema)
  {
    if(typeof schema !== 'object')
      throw new InvalidSchemaError(`Schema "${schemaName}" must be an object`)

    // TODO: Improve validation of the schema when it's added
    // For the moment we can suffer unexpected errors when we start working with the schema
    // A better approach is to validate the schema structure as a value object
    // ...resulting in a garantee that the schema is of expected definition.

    this.schemas[schemaName] = this.deepclone.clone(schema)
  }

  /**
   * @param {string} filterName
   * @param {SchemaFilter} filter
   * @throws {E_FILTER_IS_NOT_HONERING_CONTRACT}
   */
  addFilter(filterName, filter)
  {
    if(typeof filter.filter !== 'function')
      throw new FilterIsNotHoneringContractError(`Filter "${filterName}" not honering contract`)

    this.filters[filterName] = filter
  }

  /**
   * @param {string} validatorName
   * @param {SchemaValidator} validator
   * @throws {E_VALIDATOR_IS_NOT_HONERING_CONTRACT}
   */
  addValidator(validatorName, validator)
  {
    if(typeof validator.valid !== 'function')
      throw new ValidatorIsNotHoneringContractError(`Validator "${validatorName}" not honering contract`)

    this.validators[validatorName] = validator
  }
}

module.exports = SchemaComposer
