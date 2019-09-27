describe('Associative Array', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('../src/core/node/factory')


  let
  core,
  factory

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core = coreFactory.create()

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        factory = core.locate('data-structure/associative-array/factory')
        done()
      })
    })
  })

  it('Can create an associative array', () =>
  {
    expect(() =>
    {
      factory.create()
    }).to.not.throw()
  })

  it('Can add an element to associative array', () =>
  {
    const associativeArray  = factory.create()

    associativeArray.add({
      id      : 'id',
      element : true
    })

    expect(associativeArray.items['id']).to.be.deep.equal(true)
  })

  it('Can get an element from the associative array', () =>
  {
    const associativeArray  = factory.create()

    associativeArray.add({
      id      : 'id',
      element : true
    })

    const value = associativeArray.get('id')

    expect(value).to.be.deep.equal(true)
  })

  it('Removing an element that not exists does not throw an error', () =>
  {
    const associativeArray  = factory.create()

    expect(() =>
    {
      associativeArray.remove('not-exists')
    }).to.not.throw()
  })

  it('Can remove an element from the associative array', () =>
  {
    const associativeArray  = factory.create()

    associativeArray.add({
      id      : 'id',
      element : true
    })

    associativeArray.remove('id')

    expect(associativeArray.get('id')).to.be.equal(undefined)
  })

  it('Can reset the associative array', () =>
  {
    const associativeArray  = factory.create()

    associativeArray.add({
      id      : 'id',
      element : true
    })

    associativeArray.reset()

    expect(associativeArray.items).to.deep.equal({})
  })

  it('Can get the associative array in JSON format', () =>
  {
    const associativeArray  = factory.create()

    associativeArray.add({
      id      : 'id',
      element : true
    })

    const json = associativeArray.toJSON()

    expect(json).to.deep.equal({ 'id': true })
  })

  it('Can get the associative array in array format', () =>
  {
    const associativeArray  = factory.create()

    associativeArray.add({
      id      : 'id',
      element : true
    })

    const array = associativeArray.toArray()

    expect(array).to.deep.equal({
      keys   : ['id'],
      values : [true]
    })
  })

  it('Can iterate the associative array', () =>
  {
    const
    associativeArray          = factory.create(),
    associativeArrayElements  = []

    associativeArray.add({
      id      : '1',
      element : 1
    })
    associativeArray.add({
      id      : '2',
      element : 2
    })
    associativeArray.add({
      id      : '3',
      element : 3
    })

    for(let element of associativeArray)
      associativeArrayElements.push(element)

    expect(associativeArrayElements).to.deep.equal([1, 2, 3])
  })
})
