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
  create()
  {
    const
    locator       = this.createLocator(),
    configFetcher = new ConfigFetcher(locator),
    serviceLoader = new ServiceLoader(locator),
    core          = new Core(locator, configFetcher, serviceLoader)

    core.add('core/common/bootstrap')
    core.add('core/common/schema')
    core.add('core/common/object')
    core.add('core/common/string')
    core.add('core/common/data-structure')

    core.add('core/node/console')
    core.add('core/node/eventbus')
    core.add('core/node/process')
    core.add('core/node/schema/bootstrap')

    core.add('core/common/channel')
    core.add('core/common/bus')

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
