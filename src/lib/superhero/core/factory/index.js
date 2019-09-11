/* eslint-disable no-undef */
define(function()
{
  class Factory
  {
    constructor({
      locator,
      composer,
      schema,
      dependencies
    })
    {
      this.locator                = locator
      this.composer               = composer
      this.schema                 = schema
      this.dependencies           = dependencies

      this.Class                  = this.tryLocate(schema)
      this[Symbol.for('schema')]  = schema
    }

    hasClass()
    {
      return this.Class !== undefined
    }

    tryLocate(path)
    {
      try
      {
        return this.locator.locate(path)
      }
      catch(error)
      {
        switch(error)
        {
        case 'E_SERVICE_UNDEFINED':
          return undefined
        default:
          throw error
        }
      }
    }

    // initializeDTO(dto)
    // {
    //   const dependencies = {}

    //   for(const attribute in dto)
    //   {
    //     const type = this.schema[attribute].type

    //     if(type !== 'schema')
    //     {
    //       const
    //       factory = this.tryLocate(`${type}/factory`),
    //       service = this.tryLocate(type)

    //       if(factory)
    //         dependencies[attribute] = factory.create(dto[attribute])
    //       else if(service)
    //         dependencies[attribute] = service

    //     }
    //     else
    //     {
    //       const
    //       schema  = this.schema[attribute].schema,
    //       factory = this.tryLocate(`${schema}/factory`)

    //       if(factory)
    //       {
    //         dependencies[attribute] = factory.create(dto[attribute])
    //       }

    //     }
    //   }

    //   return { ...dto, ...dependencies }
    // }

    getConstructorDependencies()
    {
      const dependencies = {}

      for(const key in this.dependencies)
        dependencies[key]  = this.dependencies[key]

      return dependencies
    }

    composeArguments(dto)
    {
      const dependencies = this.getConstructorDependencies()
      // dtoInitialized = this.initializeDTO(dto)

      return {
        ...dto,
        ...dependencies
      }
    }

    composeDTO(dto)
    {
      return this.composer.compose(this[Symbol.for('schema')], dto)
    }

    createInstance(dto)
    {
      const
      composedDTO = this.composeDTO(dto)
      args        = this.composeArguments(composedDTO),
      instance    = new this.Class(args)

      return instance
    }

    create(dto = {})
    {
      if(this.hasClass())
        return this.createInstance(dto)
      else
        return this.composeDTO(dto)
    }

    get [Symbol.toStringTag]()
    {
      return 'Factory'
    }
  }

  return Factory
})
