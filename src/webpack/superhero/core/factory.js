const
Core          = require('.'),
Configuration = require('./configuration'),
Deepclone     = require('./deepclone'),
Deepfind      = require('./deepfind'),
Deepfreeze    = require('./deepfreeze'),
Deepmerge     = require('./deepmerge'),
DeepAssign    = require('./deepassign'),
Locator       = require('./locator')

class CoreFactory
{
  create()
  {
    const
    locator = this.createLocator(),
    core    = new Core(locator)

    core.add('core/bootstrap')
    core.add('core/schema')
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
    deepassign    = new DeepAssign(),
    configuration = new Configuration(deepclone, deepmerge, deepfind)

    locator.set('core/deepclone', deepclone)
    locator.set('core/deepfreeze', deepfreeze)
    locator.set('core/deepmerge', deepmerge)
    locator.set('core/deepfind', deepfind)
    locator.set('core/deepassign', deepassign)
    locator.set('core/configuration', configuration)

    return locator
  }
}

module.exports =  CoreFactory
