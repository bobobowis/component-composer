describe('Multiple Associative Array', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('../src/core/node-factory')

  let
  core,
  factory

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core = coreFactory.create()

    core.add('core/data-structure')

    core.load()
    core.locate('core/bootstrap').bootstrap().then(() =>
    {
      factory = core.locate('data-structure/multiple-associative-array/factory')
      done()
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
    const multipleAssociativeArray = factory.create()

    multipleAssociativeArray.add({
      id      : 'id',
      element : true
    })

    expect(multipleAssociativeArray.items['id']).to.be.deep.equal([true])
  })

  it('Can get an element from the associative array', () =>
  {
    const multipleAssociativeArray = factory.create()

    multipleAssociativeArray.add({
      id      : 'id',
      element : true
    })

    const value = multipleAssociativeArray.get('id')

    expect(value).to.be.deep.equal([true])
  })

  it('Removing an element that not exists does not throw an error', () =>
  {
    const multipleAssociativeArray  = factory.create()

    expect(() =>
    {
      multipleAssociativeArray.removeElement({
        id      : 'not-exist',
        element : 4
      })
    }).to.not.throw()
  })

  it('Can remove an element from a multiple associative array property', () =>
  {
    const multipleAssociativeArray  = factory.create()

    multipleAssociativeArray.add({
      id      : 'id',
      element : 1
    })

    multipleAssociativeArray.add({
      id      : 'id',
      element : 2
    })

    multipleAssociativeArray.add({
      id      : 'id',
      element : 3
    })

    multipleAssociativeArray.removeElement({
      id      : 'id',
      element : 3
    })

    expect(multipleAssociativeArray.get('id')).to.be.deep.equal([1, 2])
  })

  it('Can reset the associative array', () =>
  {
    const multipleAssociativeArray  = factory.create()

    multipleAssociativeArray.add({
      id      : 'id',
      element : true
    })

    multipleAssociativeArray.reset()

    expect(multipleAssociativeArray.items).to.deep.equal({})
  })

  it('Can get the associative array in JSON format', () =>
  {
    const multipleAssociativeArray  = factory.create()

    multipleAssociativeArray.add({
      id      : 'id',
      element : true
    })

    const json = multipleAssociativeArray.toJSON()

    expect(json).to.deep.equal({ 'id': [true] })
  })

  it('Can get the associative array in array format', () =>
  {
    const multipleAssociativeArray  = factory.create()

    multipleAssociativeArray.add({
      id      : '1',
      element : { 'foo': 'bar' }
    })

    multipleAssociativeArray.add({
      id      : '1',
      element : { 'foo': 'baz' }
    })

    multipleAssociativeArray.add({
      id      : '2',
      element : { 'bar': 'baz' }
    })

    const array = multipleAssociativeArray.toArray()

    expect(array).to.deep.equal({
      keys   : ['1', '2'],
      values : [[{ 'foo': 'bar' }, { 'foo': 'baz' }], [{ 'bar': 'baz' }]]
    })
  })

  it('Can iterate the associative array', () =>
  {
    const
    multipleAssociativeArray          = factory.create(),
    multipleAssociativeArrayElements  = []

    multipleAssociativeArray.add({
      id      : '1',
      element : 1
    })

    multipleAssociativeArray.add({
      id      : '2',
      element : 2
    })

    multipleAssociativeArray.add({
      id      : '3',
      element : 3
    })

    for(let element of multipleAssociativeArray)
      multipleAssociativeArrayElements.push(element)

    expect(multipleAssociativeArrayElements).to.deep.equal([[1], [2], [3]])
  })
})
