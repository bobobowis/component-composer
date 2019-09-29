class Core
{
  constructor(locator, configFetcher, serviceLoader)
  {
    this.locator           = locator
    this.configFetcher     = configFetcher
    this.serviceLoader     = serviceLoader
    this.components        = {}
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
    serviceNames  = serviceMap ? Object.keys(serviceMap) : []

    // eager loading the services in the sevice locator
    await this.serviceLoader.loadServiceRecursion(serviceNames)
  }

  locate(service)
  {
    return this.locator.locate(service)
  }
}

module.exports = Core
