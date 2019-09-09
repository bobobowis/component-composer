/* eslint-disable no-undef */
define(['require', 'superhero/core/schema/composer/index'], function(require)
{
  const Composer = require('superhero/core/schema/composer/index')

  class ComposerLocator
  {
    constructor(locator)
    {
      this.locator = locator
    }

    locate()
    {
      const
      deepmerge = this.locator.locate('core/deepmerge'),
      deepclone = this.locator.locate('core/deepclone')

      return new Composer(deepmerge, deepclone)
    }
  }

  return ComposerLocator
})
