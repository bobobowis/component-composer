(() =>
{
  const domIsReady = require('core/browser/dom-ready')

  const callback = async () =>
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

        const eventbus = core.locator.locate('core/eventbus')
        eventbus.emit({
          name : 'logged',
          data : 'que paso parce'
        })
      })
    })
  }

  domIsReady(callback)
})()
