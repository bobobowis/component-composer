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


    getFactoryArgs(schema)
    {
      const args = {}

      for(const key in schema)
        args[key] = this.locator.locate(schema[key])

      return args
    }

    bootstrap()
    {
      const Factory = this.locator.locate('core/factory')

      for(const schema in this.factories)
      {
        const
        args    = this.getFactoryArgs(this.factories[schema]),
        factory = new Factory({
          locator  : this.locator,
          composer : this.composer,
          args,
          schema
        })

        this.locator.set(`${schema}/factory`, factory)
      }
    }
  }

  return FactoryBootstrap
})
