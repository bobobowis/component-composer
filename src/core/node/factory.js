const
Core          = require('..'),
Locator       = require('core/common/locator'),
Deepclone     = require('core/common/deepclone'),
Deepfreeze    = require('core/common/deepfreeze'),
Deepfind      = require('core/common/deepfind'),
Deepmerge     = require('core/common/deepmerge'),
DeepAssign    = require('core/common/deepassign'),
Configuration = require('core/common/configuration'),
ConfigFetcher = require('core/node/config-fetcher'),
ServiceLoader = require('core/node/service-loader'),
Path          = require('core/node/path')

class CoreFactory
{
  create()
  {
    const
    locator       = this.createLocator(),
    configFetcher = new ConfigFetcher(locator),
    serviceLoader = new ServiceLoader(locator),
    core          = new Core(locator, configFetcher, serviceLoader)

    core.add('core/bootstrap')
    core.add('core/console')
    core.add('core/object')
    core.add('core/schema')
    core.add('core/node/process')
    core.add('core/node/schema/bootstrap')
    core.add('core/string')
    core.add('core/data-structure')
    core.add('core/node/eventbus')
    core.add('core')

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
    nodePath      = require('path'),
    path          = new Path(nodePath),
    deepassign    = new DeepAssign(deepclone),
    configuration = new Configuration(deepclone, deepmerge, deepfind, deepfreeze)

    locator.set('core/node/path', path)
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
