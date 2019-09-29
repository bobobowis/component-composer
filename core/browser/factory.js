const
Core          = require('core'),
Locator       = require('core/common/locator'),
Deepclone     = require('core/common/deepclone'),
Deepfreeze    = require('core/common/deepfreeze'),
Deepfind      = require('core/common/deepfind'),
Deepmerge     = require('core/common/deepmerge'),
DeepAssign    = require('core/common/deepassign'),
Configuration = require('core/common/configuration'),
ConfigFetcher = require('core/browser/config-fetcher'),
ServiceLoader = require('core/browser/service-loader')

class CoreFactory
{
  create(components)
  {
    const
    locator       = this.createLocator(),
    configFetcher = new ConfigFetcher(locator),
    serviceLoader = new ServiceLoader(locator),
    core          = new Core(locator, configFetcher, serviceLoader)

    for(const component of components)
      core.add(component.name, component.path)

    return core
  }

  createLocator()
  {
    const
    locator       = new Locator(),
    deepclone     = new Deepclone(),
    deepfreeze    = new Deepfreeze(),
    deepmerge     = new Deepmerge(),
    deepfind      = new Deepfind(),
    deepassign    = new DeepAssign(deepclone),
    configuration = new Configuration(deepclone, deepmerge, deepfind, deepfreeze)

    locator.set('core/deepclone', deepclone)
    locator.set('core/deepfreeze', deepfreeze)
    locator.set('core/deepmerge', deepmerge)
    locator.set('core/deepfind', deepfind)
    locator.set('core/deepassign', deepassign)
    locator.set('core/configuration', configuration)

    return locator
  }
}

module.exports = CoreFactory
