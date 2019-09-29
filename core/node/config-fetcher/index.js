const ComponentNotResolvableError = require('./error/component-not-resolvable')

/**
 * @implements {core/config-fetcher}
 */
class NodeConfigFetcher
{
  constructor(locator)
  {
    this.locator = locator
  }
  async fetchComponentConfig(component, pathname)
  {
    return new Promise(async (resolve, reject) =>
    {
      // TODO define order and preference
      const
      path          = this.locator.locate('core/path'),
      specifiedPath = `${pathname}/config`,
      localPath     = `${path.main.dirname}/${component}/config`,
      absolutePath  = `${component}/config`,
      baseDir       = `${path.main.baseDir}/${component}/config`,
      corePath      = `${path.main.corePath}/${component}/config`,
      nodePath      = `${path.main.nodePath}/${component}/config`,
      browserPath   = `${path.main.browserPath}/${component}/config`,
      commonPath    = `${path.main.commonPath}/${component}/config`

      if(path.isResolvable(specifiedPath))
        resolve(require(specifiedPath))
      else if(path.isResolvable(nodePath))
        resolve(require(nodePath))
      else if(path.isResolvable(commonPath))
        resolve(require(commonPath))
      else if(path.isResolvable(browserPath))
        resolve(require(browserPath))
      else if(path.isResolvable(absolutePath))
        resolve(require(absolutePath))
      else if(path.isResolvable(localPath))
        resolve(require(localPath))
      else if(path.isResolvable(corePath))
        resolve(require(corePath))
      else if(path.isResolvable(baseDir))
        resolve(require(baseDir))
      else
        reject(new ComponentNotResolvableError(`could not resolve path to component "${component}"`))
    })
  }
}

module.exports = NodeConfigFetcher
