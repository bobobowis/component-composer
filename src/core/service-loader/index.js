class ServiceLoader
{
  constructor(locator)
  {
    this.locator = locator
  }

  async loadService(service)
  {
    throw new Error('Method not implemented')
  }
}

module.exports = ServiceLoader
