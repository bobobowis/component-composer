/* eslint-disable no-undef */
define(function()
{
  class FactoryBootstrap
  {
    constructor({
      factories,
      locator,
      composer
    })
    {
      this.locator    = locator
      this.composer   = composer
      this.factories  = factories
    }


    getFactoryDependencies(schema)
    {
      const dependencies = {}

      for(const key in schema)
        dependencies[key] = this.locator.locate(schema[key])

      return dependencies
    }

    bootstrap()
    {
      const Factory = this.locator.locate('core/factory')

      for(const schema in this.factories)
      {
        const
        dependencies  = this.getFactoryDependencies(this.factories[schema]),
        factory       = new Factory({
          locator  : this.locator,
          composer : this.composer,
          schema,
          dependencies
        })

        this.locator.set(`${schema}/factory`, factory)
      }
    }
  }

  return FactoryBootstrap
})
