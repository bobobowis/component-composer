const
ConfigFetcher               = require('core/common/config-fetcher'),
ComponentNotResolvableError = require('core/common/config-fetcher/error/component-not-resolvable')

class BrowserConfigFetcher extends ConfigFetcher
{
  async fetchComponentConfig(component, path)
  {
    return new Promise(async (resolve, reject) =>
    {
      try
      {
        const config = require(`src/${path ? path : component}/config`)
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
