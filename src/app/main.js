/* eslint-disable no-undef */
define(function(require)
{
  const
  CoreFactory = require('superhero/core/factory'),
  coreFactory = new CoreFactory(),
  core        = coreFactory.create()

  core.add('core/channel')
  core.add('core/bus')

  core.load().then(() =>
  {
    core.locate('core/bootstrap').bootstrap().then(() =>
    {
      const bus = core.locator.locate('core/bus')
      bus.emit({
        channelId : 'events',
        name      : 'logged',
        data      : 'que paso parce'
      })
    })
  })
})

// const
// CoreFactory = require('superhero/core/factory'),
// coreFactory = new CoreFactory(),
// core        = coreFactory.create()

// core.add('ui')

// core.load()

// core.locate('core/bootstrap').bootstrap().then(() =>
// {
//   core.locate('core/ui/app').run(window.initialState)
// })
