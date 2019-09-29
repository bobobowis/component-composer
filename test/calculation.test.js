describe('Calculations', () =>
{
  const
  expect      = require('chai').expect,
  path        = require('path'),
  context     = require('mochawesome/addContext'),
  CoreFactory = require('../core/node/factory'),
  components  = require('./components')

  let core

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core        = coreFactory.create([
      ...components,
      { name: 'api', path: path.resolve(__dirname, '/api') },
      { name: 'domain', path: path.resolve(__dirname, '/domain') }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        core.locate('core/http/server').listen(9003)
        core.locate('core/http/server').onListening(done)
      })
    })
  })

  after(() =>
  {
    core.locate('core/http/server').close()
  })

  it('A client can create a calculation', async function()
  {
    const
    configuration = core.locate('core/configuration'),
    httpRequest   = core.locate('core/http/request')

    context(this, {
      title : 'route',
      value : configuration.find('core.http.server.routes.create-calculation')
    })

    const response = await httpRequest.post('http://localhost:9003/calculations')
    expect(response.data.id).to.be.equal(1)
  })

  it('A client can append a calculation to the result of a former calculation if authentication Api-Key', async function()
  {
    const
    configuration = core.locate('core/configuration'),
    httpRequest   = core.locate('core/http/request')

    context(this, {
      title : 'route',
      value : configuration.find('core.http.server.routes.append-calculation')
    })
    const
    url                   = 'http://localhost:9003/calculations/1',
    data                  = {
      id    : 1,
      type  : 'addition',
      value : 100
    },
    unauthorizedResponse = await httpRequest.put({ url, data })

    expect(unauthorizedResponse.status).to.be.equal(401)

    const headers = {
      'api-key' : 'ABC123456789'
    },
    authorizedResponse = await httpRequest.put({ headers, url, data })
    expect(authorizedResponse.data.result).to.be.equal(data.value)
  })
})
