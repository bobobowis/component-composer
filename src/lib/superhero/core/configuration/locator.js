/* eslint-disable no-undef */
define(['require', 'superhero/core/configuration/index'], function(require)
{
  const Configuration = require('superhero/core/configuration/index')

  class ConfigurationLocator
  {
    constructor(locator)
    {
      this.locator = locator
    }

    locate()
    {
      const
      deepclone     = this.locator.locate('core/deepclone'),
      deepmerge     = this.locator.locate('core/deepmerge'),
      deepfind      = this.locator.locate('core/deepfind'),
      configuration = new Configuration(deepclone, deepmerge, deepfind)

      return configuration
    }
  }

  return ConfigurationLocator
})
