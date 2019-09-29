describe('resource dispatcher integration tests', async () =>
{
  const
  expect  = require('chai').expect,
  path    = require('path'),
  Request = require('@superhero/request'),
  request = new Request({ url: 'http://localhost:9001' })

  let core

  before((done) =>
  {
    const
    CoreFactory = require('../factory'),
    coreFactory = new CoreFactory()

    core = coreFactory.create([
      { name: 'core/common/bootstrap' },
      { name: 'core/common/observer' },
      { name: 'core/common/schema' },
      { name: 'core/common/object' },
      { name: 'core/common/string' },
      { name: 'core/common/data-structure' },
      { name: 'core/node/console' },
      { name: 'core/node/process' },
      { name: 'core/node/schema/bootstrap' },
      { name: 'core/node/eventbus' },
      { name: 'core/common/channel' },
      { name: 'core/node/http/server' },
      { name: 'core/resource', path: __dirname },
      { name: 'test', path: path.resolve(__dirname, './test') }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        core.locate('core/http/server').listen(9001)
        core.locate('core/http/server').onListening(done)
      })
    })
  })

  after(() =>
  {
    core.locate('core/http/server').close()
  })

  it('404 status response', async () =>
  {
    const file = await request.get('/resource/none-existent.url')
    expect(file.status).to.be.equal(404)
  })

  it('jpg content-type header', async () =>
  {
    const file = await request.get('/resource/file.jpg')
    expect(file.headers['content-type']).to.be.equal('image/jpeg')
    expect(file.status).to.be.equal(200)
  })

  it('gif content-type header', async () =>
  {
    const file = await request.get('/resource/file.gif')
    expect(file.headers['content-type']).to.be.equal('image/gif')
    expect(file.status).to.be.equal(200)
  })

  it('png content-type header', async () =>
  {
    const file = await request.get('/resource/file.png')
    expect(file.headers['content-type']).to.be.equal('image/png')
    expect(file.status).to.be.equal(200)
  })

  it('ico content-type header', async () =>
  {
    const file = await request.get('/resource/file.ico')
    expect(file.headers['content-type']).to.be.equal('image/vnd.microsoft.icon')
    expect(file.status).to.be.equal(200)
  })

  it('css content-type header', async () =>
  {
    const file = await request.get('/resource/file.css')
    expect(file.headers['content-type']).to.be.equal('text/css')
    expect(file.status).to.be.equal(200)
  })

  it('csv content-type header', async () =>
  {
    const file = await request.get('/resource/file.csv')
    expect(file.headers['content-type']).to.be.equal('text/csv')
    expect(file.status).to.be.equal(200)
  })

  it('pdf content-type header', async () =>
  {
    const file = await request.get('/resource/file.pdf')
    expect(file.headers['content-type']).to.be.equal('application/pdf')
    expect(file.status).to.be.equal(200)
  })

  it('json content-type header', async () =>
  {
    const file = await request.get('/resource/file.json')
    expect(file.headers['content-type']).to.be.equal('application/json')
    expect(file.status).to.be.equal(200)
  })

  it('js content-type header', async () =>
  {
    const file = await request.get('/resource/file.js')
    expect(file.headers['content-type']).to.be.equal('application/javascript')
    expect(file.status).to.be.equal(200)
  })
})
