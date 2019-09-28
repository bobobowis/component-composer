const ComponentNotResolvableError = require('./error/component-not-resolvable')

/**
 * @implements {core/config-fetcher}
 */
class BrowserConfigFetcher
{
  constructor(locator)
  {
    this.locator = locator
  }

  async fetchComponentConfig(component, path)
  {
    return new Promise(async (resolve, reject) =>
    {
      try
      {
        const config = require(`dist/${path ? path : component}/config`)
        resolve(config)
      }
      catch(error)
      {
        reject(new ComponentNotResolvableError(`could not resolve path to component "${component}"`))
      }
    })
  }
}

module.exports = BrowserConfigFetcher
