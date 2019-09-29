describe('Logger', () =>
{
  const
  context     = require('mochawesome/addContext'),
  CoreFactory = require('../core/node/factory'),
  components  = require('./components')

  let core

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core        = coreFactory.create([
      ...components,
      { name: 'api' },
      { name: 'domain' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        core.locate('core/http/server').listen(9002)
        core.locate('core/http/server').onListening(done)
      })
    })
  })

  it('the logger is logging', function(done)
  {
    const
    configuration = core.locate('core/configuration'),
    eventbus      = core.locate('core/eventbus')

    context(this, { title: 'observers', value: configuration.find('core.http.eventbus.observers') })

    eventbus.once('logged calculation created', () => done())
    eventbus.emit('calculation created', 'test')
  })
})
