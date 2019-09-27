(function(document, window)
{
  const domIsReady = require('core/browser/dom-ready')

  const callback = async function()
  {
    const
    CoreFactory = require('core/browser/factory'),
    coreFactory = new CoreFactory(),
    core        = coreFactory.create()

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        const bus = core.locator.locate('core/bus')
        bus.emit({
          channelId : 'domain-events',
          name      : 'logged',
          data      : 'que paso parce'
        })
      })
    })
  }

  domIsReady(callback)
})(document, window)
