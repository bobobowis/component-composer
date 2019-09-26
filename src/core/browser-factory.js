const
Core          = require('..'),
Locator       = require('./locator'),
Deepclone     = require('./deepclone'),
Deepfreeze    = require('./deepfreeze'),
Deepfind      = require('./deepfind'),
Deepmerge     = require('./deepmerge'),
DeepAssign    = require('./deepassign'),
Configuration = require('./configuration'),
ConfigFetcher = require('./browser-config-fetcher'),
ServiceLoader = require('./browser-service-loader')

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
    core.add('core/schema')
    core.add('core/browser-schema-bootstrap')
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
