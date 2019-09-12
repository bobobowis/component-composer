/* eslint-disable no-undef */
define(['superhero/core/locator/error/service-undefined'], function(ServiceUndefinedError)
{
  class Locator
  {
    constructor()
    {
      this.services = {}
    }

    set(name, service)
    {
      this.services[name] = service
    }

    has(name)
    {
      return name in this.services
    }

    locate(service)
    {
      if(service in this.services)
        return this.services[service]

      throw new ServiceUndefinedError(`"${service}" can not be located`)
    }
  }

  return Locator
})
