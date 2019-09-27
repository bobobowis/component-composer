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
  create()
  {
    const
    locator       = this.createLocator(),
    configFetcher = new ConfigFetcher(locator),
    serviceLoader = new ServiceLoader(locator),
    core          = new Core(locator, configFetcher, serviceLoader)

    core.add('core/bootstrap', 'core/common/bootstrap')
    core.add('core/console', 'core/common/console')
    core.add('core/schema', 'core/common/schema')
    core.add('data-structure', 'core/common/data-structure')
    core.add('core/schema/bootstrap', 'core/browser/schema/bootstrap')
    core.add('core/channel', 'core/browser/channel')
    core.add('core/bus', 'core/browser/bus')

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
