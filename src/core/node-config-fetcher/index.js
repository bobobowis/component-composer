const
ConfigFetcher               = require('../config-fetcher'),
ComponentNotResolvableError = require('../error/component-not-resolvable')

class NodeConfigFetcher extends ConfigFetcher
{
  async fetchComponentConfig(component, pathname)
  {
    return new Promise(async (resolve, reject) =>
    {
      const
      path          = this.locator.locate('core/path'),
      specifiedPath = `${pathname}/config`,
      localPath     = `${path.main.dirname}/${component}/config`,
      absolutePath  = `${component}/config`,
      corePath      = `${path.resolve(__dirname, '../..')}/${component}/config`

      if(path.isResolvable(specifiedPath))
        resolve(require(specifiedPath))
      else if(path.isResolvable(localPath))
        resolve(require(localPath))
      else if(path.isResolvable(absolutePath))
        resolve(require(absolutePath))
      else if(path.isResolvable(corePath))
        resolve(require(corePath))
      else
        reject(new ComponentNotResolvableError(`could not resolve path to component "${component}"`))
    })
  }
}

module.exports = NodeConfigFetcher
