const
ServiceUnmetDependencyError             = require('./error/service-unmet-dependency'),
ServiceLocatorNotFoundError             = require('./error/service-locator-not-found'),
ServiceUnableToResolveDependenciesError = require('./error/service-unable-to-resolve-dependencies')

/**
 * @implements {core/service-loader}
 */
class NodeServiceLoader
{
  constructor(locator)
  {
    this.locator = locator
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

  async loadService(name)
  {
    return new Promise((resolve, reject) =>
    {
      const
      configuration = this.locator.locate('core/configuration'),
      path          = this.locator.locate('core/path'),
      locatorPath   = `${configuration.find('core.locator')[name]}/locator`

      if(path.isResolvable(locatorPath))
      {
        const
        Locator = require(locatorPath),
        locator = new Locator(this.locator)

        try
        {
          const service = locator.locate()
          this.locator.set(name, service)
          resolve()
        }
        catch(error)
        {
          switch(error.code)
          {
          case 'E_SERVICE_UNDEFINED':
          {
            reject(new ServiceUnmetDependencyError(`An unmet dependency was found for service "${name}", error: ${error.message}`))
            break
          }
          default:
            reject(error)
          }
        }
      }
      else
      {
        reject(new ServiceLocatorNotFoundError(`locator could not be found for ${name}`))
      }
    })
  }
}

module.exports = NodeServiceLoader
