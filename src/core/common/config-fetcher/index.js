class ConfigFetcher
{
  constructor(locator)
  {
    this.locator = locator
  }

  async fetchComponentConfig()
  {
    throw new Error('Method not implemented')
  }
}

module.exports = ConfigFetcher
