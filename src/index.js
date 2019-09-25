const
ComponentNotResolvableError             = require('./core/error/component-not-resolvable'),
ServiceUnableToResolveDependenciesError = require('./core/error/service-unable-to-resolve-dependencies')

class Core
{
  constructor(locator, configFetcher, serviceLoader)
  {
    this.locator        = locator
    this.configFetcher  = configFetcher
    this.serviceLoader  = serviceLoader
    this.components     = {}
  }

  add(component, pathname)
  {
    this.components[component] = pathname
  }

  remove(component)
  {
    delete this.components[component]
  }

  async load()
  {
    const configuration = this.locate('core/configuration')

    // extending the configurations of every component
    for(const component in this.components)
    {
      const config = await this.configFetcher.fetchComponentConfig(component, this.components[component])
      configuration.extend(config)
    }

    configuration.freeze()

    const
    serviceMap    = configuration.find('core.locator'),
    serviceNames  = Object.keys(serviceMap)

    // eager loading the services in the sevice locator
    this.loadServiceRecursion(serviceNames)
  }

  fetchComponentConfig(component, pathname)
  {
    const
    path          = this.locate('core/path'),
    specifiedPath = `${pathname}/config`,
    localPath     = `${path.main.dirname}/${component}/config`,
    absolutePath  = `${component}/config`,
    corePath      = `${__dirname}/${component}/config`

    if(path.isResolvable(specifiedPath)) // TODO, cannot do in webpack
      return require(specifiedPath)
    else if(path.isResolvable(localPath))
      return require(localPath)
    else if(path.isResolvable(absolutePath))
      return require(absolutePath)
    else if(path.isResolvable(corePath))
      return require(corePath)
    else
      throw new ComponentNotResolvableError(`could not resolve path to component "${component}"`)
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
        await this.serviceLoader.loadService(serviceName)
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

module.exports = Core
