const
CoreFactory = require('../factory'),
coreFactory = new CoreFactory(),
core        = coreFactory.create([
  { name: 'core/common/bootstrap' },
  { name: 'core/common/observer' },
  { name: 'core/common/schema' },
  { name: 'core/common/object' },
  { name: 'core/common/string' },
  { name: 'core/common/data-structure' },
  { name: 'core/node/console' },
  { name: 'core/node/eventbus' },
  { name: 'core/node/process' },
  { name: 'core/node/schema/bootstrap' },
  { name: 'core/common/channel' },
  { name: 'core/common/bus' },
  { name: 'core/node/http/server' },
  { name: 'core/node/handlebars' },
  { name: 'core/node/resource' },
  { name: 'api' },
  { name: 'view' }
])


core.load().then(() =>
{
  core.locate('core/bootstrap').bootstrap().then(() =>
  {
    const eventbus = core.locator.locate('core/eventbus')
    eventbus.emit('app-initialized', {})

    core.locate('core/http/server').listen(8080)
  })
})
