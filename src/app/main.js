/* eslint-disable no-undef */
define(function(require)
{
  var
  messages   = require('./messages'),  // Load any app-specific modules with a relative require call,
  print      = require('print'),        // Load library/vendor modules using full IDs
  f          = require('./ui/hash-table/factory')


  print(messages.getHello())
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
