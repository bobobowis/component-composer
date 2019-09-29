const
domIsReady  = require('../dom-ready'),
CoreFactory = require('../factory')

class Application
{
  constructor(components)
  {
    const coreFactory = new CoreFactory()
    this.core         = coreFactory.create(components)
    this.components   = components

    const domReadyStart = window.performance.now()
    domIsReady(() =>
    {
      const
      domReadyEnd = window.performance.now(),
      loadStart   = window.performance.now()

      this.core.load().then(() =>
      {
        const
        loadEnd        = window.performance.now(),
        bootstrapStart = window.performance.now()

        this.core.locate('core/bootstrap').bootstrap().then(() =>
        {
          const
          bootstrapEnd  = window.performance.now(),
          bus           = this.core.locator.locate('core/bus')

          bus.emit({
            channelId : 'domain-events',
            name      : 'app-initialized',
            data      : {
              metrics : {
                components      : this.components,
                totalcomponents : this.components.length,
                load            : loadEnd - loadStart,
                bootstrap       : bootstrapEnd - bootstrapStart,
                domReady        : domReadyEnd - domReadyStart
              }
            }
          })
        })
      })
    })
  }
}

module.exports = Application
