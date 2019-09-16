/* eslint-disable no-undef */
define([
  'require',
  'superhero/core/error/service-unmet-dependency',
  'superhero/core/error/service-locator-not-found',
  'superhero/core/error/service-unable-to-resolve-dependencies'
], function(require, ServiceUnmetDependencyError, ServiceLocatorNotFoundError, ServiceUnableToResolveDependenciesError)
{
  class Core
  {
    constructor(locator)
    {
      this.locator    = locator
      this.components = {}
    }

    add(component, pathname)
    {
      this.components[component] = pathname
    }

    async load()
    {
      return new Promise(async (resolve) =>
      {
        const configuration = this.locate('core/configuration')

        // extending the configurations of every component
        for(const component in this.components)
        {
          const config = await this.fetchComponentConfig(component, this.components[component])

          if(config)
            configuration.extend(config)
        }

        const
        serviceMap    = configuration.find('core.locator'),
        serviceNames  = Object.keys(serviceMap)

        // eager loading the services in the sevice locator
        await this.loadServiceRecursion(serviceNames)

        resolve()
      })
    }

    async fetchComponentConfig(component, pathname)
    {
      return new Promise((resolve) =>
      {
        try
        {
          const configPath = pathname ? `${pathname}/config` : `${component}/config`

          require([configPath], function(config)
          {
            resolve(config)
          })
        }
        catch(error)
        {
          resolve(undefined)
        }
      })
    }

    async loadService(name)
    {
      return new Promise((resolve, reject) =>
      {
        const
        configuration = this.locator.locate('core/configuration'),
        locatorPath   = `${configuration.find('core.locator')[name]}/locator`

        try
        {
          const locator = this.locator
          require([locatorPath], function(ServiceLocator)
          {
            try
            {
              const
              serviceLocator  = new ServiceLocator(locator),
              service         = serviceLocator.locate()

              locator.set(name, service)

              resolve()
            }
            catch(error)
            {
              switch(error.code)
              {
              case 'E_SERVICE_UNDEFINED':
                reject(new ServiceUnmetDependencyError(`An unmet dependency was found for service "${name}", error: ${error.message}`))
                break
              default:
                reject(error)
                break
              }
            }
          })
        }
        catch(error)
        {
          reject(new ServiceLocatorNotFoundError(`locator could not be found for ${name}`))
        }
      })
    }

    /**
     * Eager loading the services in the sevice locator.
     * Recursion queue to complete loading all services.
     * @param {Array<string>} services names of services
     */
    async loadServiceRecursion(services)
    {
      // when the queu is empty, then we are done
      if(services.length === 0)
        return

      // incomplete services that could not be loaded in the declared order
      const queue = []

      // looping through different service names in an attempt to eager load them
      // if an "unmet dependency" error is thrown, the service name is pushed to a queue to be located at a later stage
      // in hope that the earlier unmet dependency then is locatable
      for(const serviceName of services)
      {
        try
        {
          await this.loadService(serviceName)
        }
        catch(error)
        {
          switch(error.code)
          {
          case 'E_SERVICE_UNMET_DEPENDENCY':
            queue.push(serviceName)
            break
          default:
            throw error
          }
        }
      }

      // if the new queue is the same as the old queue, then no progress has taken place
      if(services.length === queue.length)
        throw new ServiceUnableToResolveDependenciesError(`Unmet dependencies found, could not resolve dependencies for ${queue.join(', ')}`)

      // recursion until the queue is empty
      await this.loadServiceRecursion(queue)
    }

    locate(service)
    {
      return this.locator.locate(service)
    }
  }

  return Core
})
