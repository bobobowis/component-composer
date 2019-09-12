/* eslint-disable no-undef */
define(['superhero/core/factory/bootstrap/index'], function(FactoryBootstrap)
{
  class FactoryBootstrapLocator
  {
    constructor(locator)
    {
      this.locator = locator
    }

    locate()
    {
      const
      factories = this.locator.locate('core/configuration').find('core.factories'),
      locator   = this.locator,
      composer  = this.locator.locate('core/schema/composer')

      return new FactoryBootstrap({
        factories,
        locator,
        composer
      })
    }
  }

  return FactoryBootstrapLocator
})
