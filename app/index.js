(function(document, window)
{
  const domIsReady = require('./dom-ready')

  const callback = async function()
  {
    const
    CoreFactory = require('../src/core/factory'),
    coreFactory = new CoreFactory(),
    core        = coreFactory.create()

    core.add('core/channel')
    core.add('core/bus')

    await core.load()

    core.locate('core/bootstrap').bootstrap().then(() =>
    {
      const bus = core.locator.locate('core/bus')
      bus.emit({
        channelId : 'events',
        name      : 'logged',
        data      : 'que paso parce'
      })
    })
  }

  domIsReady(callback)
})(document, window)
