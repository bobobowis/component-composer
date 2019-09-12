/* eslint-disable no-undef */
define(['require', 'superhero/core/schema/bootstrap/error/schema-not-resolvable'], function(require, SchemaNotResolvable)
{
  class SchemaBootstrap
  {
    constructor(locator, configuration)
    {
      this.locator        = locator
      this.configuration  = configuration
    }

    async bootstrap()
    {
      const
      composer    = this.locator.locate('core/schema/composer'),
      schemas     = this.configuration.find('core.schema.composer'),
      filters     = this.configuration.find('core.schema.filter'),
      validators  = this.configuration.find('core.schema.validator')

      await this.addSchemas(composer, schemas)
      this.addFilters(composer, filters)
      this.addValidators(composer, validators)
    }

    async addSchema(composer, schemas, schemaName)
    {
      return new Promise((resolve, reject) =>
      {
        try
        {
          require([schemas[schemaName]], function(schema)
          {
            composer.addSchema(schemaName, schema)
            resolve()
          })
        }
        catch(error)
        {
          const notResolvableError = new SchemaNotResolvable(`Could not resolve path for schema: "${schemaName}", path: "${schemas[schemaName]}"`)
          reject(notResolvableError)
        }
      })
    }

    async addSchemas(composer, schemas)
    {
      const schemaNames = Object.keys(schemas) || []

      return new Promise((resolve, reject) =>
      {
        Promise.all(schemaNames.map(this.addSchema.bind(this, composer, schemas)))
          .then(() =>
          {
            resolve()
          })
          .catch((error) =>
          {
            reject(error)
          })
      })
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

  return SchemaBootstrap
})
