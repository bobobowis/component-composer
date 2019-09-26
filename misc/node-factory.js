const
Core          = require('../src'),
Locator       = require('../src/core/locator'),
Deepclone     = require('../src/core/deepclone'),
Deepfreeze    = require('../src/core/deepfreeze'),
Deepfind      = require('../src/core/deepfind'),
Deepmerge     = require('../src/core/deepmerge'),
DeepAssign    = require('../src/core/deepassign'),
Configuration = require('../src/core/configuration'),
ConfigFetcher = require('./node-config-fetcher'),
ServiceLoader = require('./node-service-loader'),
Path          = require('./path')

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
    core.add('core/process')
    core.add('core/schema')
    core.add('core/string')
    core.add('core/data-structure')
    core.add('core/channel')
    core.add('core/bus')
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
