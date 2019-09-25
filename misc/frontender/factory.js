const
Frontender    = require('.'),
Locator       = require('../../src/core/locator'),
Deepclone     = require('../../src/core/deepclone'),
Deepfreeze    = require('../../src/core/deepfreeze'),
Deepfind      = require('../../src/core/deepfind'),
Deepmerge     = require('../../src/core/deepmerge'),
Configuration = require('../../src/core/configuration'),
Path          = require('../../src/core/path')

class FrontenderFactory
{
  async create(components)
  {
    const
    frontender    = new Frontender({
      locator : this.createLocator(),
      fs      : require('fs'),
      components
    })

    frontender.loadConfig()
    frontender.dumpConfiguration()
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
    configuration = new Configuration(deepclone, deepmerge, deepfind, deepfreeze)

    locator.set('core/path', path)
    locator.set('core/deepclone', deepclone)
    locator.set('core/deepfreeze', deepfreeze)
    locator.set('core/deepmerge', deepmerge)
    locator.set('core/deepfind', deepfind)
    locator.set('core/path', path)
    locator.set('core/configuration', configuration)

    return locator
  }
}

module.exports = new FrontenderFactory()

