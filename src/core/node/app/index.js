const
CoreFactory = require('../factory'),
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