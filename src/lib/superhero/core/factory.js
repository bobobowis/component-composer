/* eslint-disable no-undef */
define(['require', 'superhero/core/locator/constituent'], function(require)
{
  const
  Core          = require('superhero/core/index'),
  Configuration = require('superhero/core/configuration/index'),
  Deepclone     = require('superhero/core/deepclone/index'),
  Deepfind      = require('superhero/core/deepfind/index'),
  Deepfreeze    = require('superhero/core/deepfreeze/index'),
  Deepmerge     = require('superhero/core/deepmerge/index'),
  Locator       = require('superhero/core/locator/index')

  class CoreFactory
  {
    create()
    {
      const
      locator = this.createLocator(),
      core    = new Core(locator)

      core.add('core/bootstrap')
      core.add('core/schema')
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
      configuration = new Configuration(deepclone, deepmerge, deepfind)

      locator.set('core/deepclone', deepclone)
      locator.set('core/deepfreeze', deepfreeze)
      locator.set('core/deepmerge', deepmerge)
      locator.set('core/deepfind', deepfind)
      locator.set('core/configuration', configuration)

      return locator
    }
  }

  return CoreFactory
})
