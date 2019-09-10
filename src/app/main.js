/* eslint-disable no-undef */
define(function(require)
{
  const
  CoreFactory = require('superhero/core/factory'),
  coreFactory = new CoreFactory(),
  core        = coreFactory.create()

  core.load().then(() =>
  {
    core.locate('core/bootstrap').bootstrap().then(() =>
    {
      console.log('LOADED')
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
