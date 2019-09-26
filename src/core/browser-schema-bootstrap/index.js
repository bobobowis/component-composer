const SchemaNotResolvable = require('./error/schema-not-resolvable')

class SchemaBootstrap
{
  constructor(locator, configuration)
  {
    this.locator        = locator
    this.configuration  = configuration
  }

  bootstrap()
  {
    const
    composer    = this.locator.locate('core/schema/composer'),
    schemas     = this.configuration.find('core.schema.composer'),
    filters     = this.configuration.find('core.schema.filter'),
    validators  = this.configuration.find('core.schema.validator')

    this.addSchemas(composer, schemas)
    this.addFilters(composer, filters)
    this.addValidators(composer, validators)
  }

  addSchemas(composer, schemas)
  {
    for(const schemaName in schemas || [])
    {
      try
      {
        const schema = require(`src/${schemas[schemaName]}`)
        composer.addSchema(schemaName, schema)
      }
      catch(error)
      {
        throw new SchemaNotResolvable(`Could not resolve path for schema: "${schemaName}", path: "${schemas[schemaName]}"`)
      }
    }
  }

  addFilters(composer, filters)
  {
    for(const filterName in filters || [])
    {
      const filter = this.locator.locate(filters[filterName])
      composer.addFilter(filterName, filter)
    }
  }

  addValidators(composer, validators)
  {
    for(const validatorName in validators || [])
    {
      const validator = this.locator.locate(validators[validatorName])
      composer.addValidator(validatorName, validator)
    }
  }
}

module.exports = SchemaBootstrap
