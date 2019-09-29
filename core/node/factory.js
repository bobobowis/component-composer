const
Core          = require('..'),
Locator       = require('../common/locator'),
Deepclone     = require('../common/deepclone'),
Deepfreeze    = require('../common/deepfreeze'),
Deepfind      = require('../common/deepfind'),
Deepmerge     = require('../common/deepmerge'),
DeepAssign    = require('../common/deepassign'),
Configuration = require('../common/configuration'),
ConfigFetcher = require('./config-fetcher'),
ServiceLoader = require('./service-loader'),
Path          = require('./path')

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
    path          = new Path(),
    deepassign    = new DeepAssign(deepclone),
    configuration = new Configuration(deepclone, deepmerge, deepfind, deepfreeze)

    locator.set('core/path', path)
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
