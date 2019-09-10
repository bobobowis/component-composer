/* eslint-disable no-undef */
define(function()
{
  class Factory
  {
    constructor({
      locator,
      composer,
      schema,
      args
    })
    {
      this.locator                = locator
      this.composer               = composer
      this.arguments              = args

      this[Symbol.for('schema')]  = schema
    }

    getFactory(type)
    {
      try
      {
        return this.locator.locate(`${type}/factory`)
      }
      catch(error)
      {
        switch(error)
        {
        case 'E_SERVICE_UNDEFINED':
          return undefined
        }
      }
    }

    getService(type)
    {
      try
      {
        return this.locator.locate(type)
      }
      catch(error)
      {
        switch(error)
        {
        case 'E_SERVICE_UNDEFINED':
          return undefined
        }
      }
    }

    getClass()
    {
      try
      {
        return this.locator.locate(this[Symbol.for('schema')])
      }
      catch(error)
      {
        switch(error)
        {
        case 'E_SERVICE_UNDEFINED':
          return undefined
        }
      }
    }

    getAttributeType(attribute)
    {
      const schema = this.composer.schemas[this[Symbol.for('schema')]]
      return schema[attribute].type
    }

    getDTODependencies(dto)
    {
      const args = {}

      for(const key in dto)
      {
        const
        type    = this.getAttributeType(key),
        factory = this.getFactory(type),
        service = this.getService(type)

        if(factory)
          args[key] = factory.create(dto[key])
        else if(service)
          args[key] = service
      }

      return args
    }

    getClassConstructorDependencies()
    {
      const dependencies = {}

      for(const key in this.arguments)
        dependencies[key]  = this.arguments[key]

      return dependencies
    }

    getClassConstructorArguments(dto)
    {
      const
      dependencies    = this.getClassConstructorDependencies(),
      dtoDependencies = this.getDTODependencies(dto)

      return {
        ...dto,
        ...dtoDependencies,
        ...dependencies
      }
    }

    composeDTO(dto = {})
    {
      return this.composer.compose(this[Symbol.for('schema')], dto)
    }

    create(dto)
    {
      const
      composedDTO = this.composeDTO(dto),
      Class       = this.getClass()

      if(Class)
      {
        const args = this.getClassConstructorArguments(composedDTO)
        return new Class(args)
      }
      else
      {
        return composedDTO
      }
    }

    get [Symbol.toStringTag]()
    {
      return 'Factory'
    }
  }

  return Factory
})
