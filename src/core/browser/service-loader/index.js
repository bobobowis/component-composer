const
ServiceUnmetDependencyError = require('core/common/service-loader/error/service-unmet-dependency'),
ServiceLocatorNotFoundError = require('core/common/service-loader/error/service-locator-not-found'),
ServiceLoader               = require('core/common/service-loader')

class BrowserServiceLoader extends ServiceLoader
{
  async loadService(name)
  {
    return new Promise(async (resolve, reject) =>
    {
      try
      {
        const
        configuration = this.locator.locate('core/configuration'),
        path          = configuration.find('core.locator')[name],
        Locator       = require(`src/${path}/locator`),
        locator       = new Locator(this.locator)

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
      catch(error)
      {
        reject(new ServiceLocatorNotFoundError(`locator could not be found for ${name}`))
      }
      // const
      // configuration = this.locator.locate('core/configuration'),
      // src           = `webpacked/${configuration.find('core.locator')[name]}/locator.js`,
      // response      = await fetch(src)

      // if(response.ok)
      // {
      //   const script = document.createElement('script')

      //   script.type = 'text/javascript'
      //   script.src  = src
      //   script.onload = function(locator)
      //   {
      //     try
      //     {
      //       const service = locator.locate()
      //       this.locator.set(name, service)
      //       resolve()
      //     }
      //     catch(error)
      //     {
      //       switch(error.code)
      //       {
      //       case 'E_SERVICE_UNDEFINED':
      //       {
      //         reject(new ServiceUnmetDependencyError(`An unmet dependency was found for service "${name}", error: ${error.message}`))
      //         break
      //       }
      //       default:
      //         reject(error)
      //       }
      //     }
      //     resolve()
      //   }
      //   document.body.appendChild(script)
      // }
      // else
      // {
      //   reject(new ServiceLocatorNotFoundError(`locator could not be found for ${name}`))
      // }
    })
  }
}

module.exports = BrowserServiceLoader
