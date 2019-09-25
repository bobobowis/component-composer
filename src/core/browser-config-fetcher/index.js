const
ConfigFetcher               = require('../config-fetcher'),
ComponentNotResolvableError = require('../error/component-not-resolvable')

class BrowserConfigFetcher extends ConfigFetcher
{
  async fetchComponentConfig(component, url)
  {
    return new Promise(async (resolve, reject) =>
    {
      // TODO add fetch polyfill
      // const
      // src       = url ? url : `webpacked/${component}/config.js`,
      // response  = await fetch(src)

      // if(response.ok)
      // {
      //   const script = document.createElement('script')

      //   script.type = 'text/javascript'
      //   script.src  = src

      //   document.body.appendChild(script)
      //   resolve()
      // }
      // else
      // {
      //   reject(new ComponentNotResolvableError(`could not resolve path to component "${component}"`))
      // }
      try
      {
        const config = require.context('src', false, /^config\.js$/)
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
