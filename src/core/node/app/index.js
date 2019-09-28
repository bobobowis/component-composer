const
CoreFactory = require('../factory'),
coreFactory = new CoreFactory(),
core        = coreFactory.create()

core.load().then(() =>
{
  core.locate('core/bootstrap').bootstrap().then(() =>
  {
    const
    consoleFactory = core.locate('core/console/factory'),
    myConsole      = consoleFactory.create({
      prefix     : 'WARN',
      tty        : true,
      color      : 'black',
      background : 'yellow'
    })

    myConsole.log('HUEHUEHUE')
  })
})
