
describe('Multiple Associative Array Validator', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('../src/core/factory')

  let
  core,
  validator

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core = coreFactory.create()

    core.add('core/data-structure')

    core.load()

    core.locate('core/bootstrap').bootstrap().then(() =>
    {
      validator = core.locate('core/schema/validator/data-structure/multiple-associative-array')
      done()
    })
  })

  it('Can valid a single associative-array', () =>
  {
    expect(() =>
    {
      const
      options = {},
      data    = {
        'items' : { }
      }

      validator.valid(options, data)
    }).to.not.throw()
  })

  it('Can valid an associative-array collection', () =>
  {
    expect(() =>
    {
      const
      options = {
        'collection' : true
      },
      data    = [{
        'items' : {
          'item' : ['a', 'b', 'c']
        }
      }]

      validator.valid(options, data)
    }).to.not.throw()
  })


  it('Should throw error when a collection is being validated and it\'s not an array', () =>
  {
    expect(() =>
    {
      const
      options = {
        'collection' : true
      },
      data    = 12

      validator.valid(options, data)
    }).to.throw()
  })

  it('Should throw error when is not an object', () =>
  {
    expect(() =>
    {
      const
      options = {},
      data    = true

      validator.valid(options, data)
    }).to.throw()
  })

  it('Should throw error when has a property that is not an array', () =>
  {
    expect(() =>
    {
      const
      options = {
        'associative-array-type' : 'string'
      },
      data    = {
        'items' : {
          'property' : true
        }
      }

      validator.valid(options, data)
    }).to.throw()
  })
})
