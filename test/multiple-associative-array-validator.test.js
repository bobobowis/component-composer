
describe('Multiple Associative Array Validator', () =>
{
  const expect = require('chai').expect

  let core
  let validator

  before((done) =>
  {
    const
    CoreFactory = require('superhero/core/factory'),
    coreFactory = new CoreFactory

    core = coreFactory.create()
    core.add('core')

    core.load()

    core.locate('core/bootstrap').bootstrap().then(() =>
    {
      validator = core.locate('core/schema/validator/data-structure/multiple-associative-array')
      done()
    })
  })

  it('Can valid a single associative-array', () =>
  {
    expect(() => {
      const
      options = {},
      data    = {
        'array' : { }
      }

      validator.valid(options, data)

    }).to.not.throw()
  })

  it('Can valid an associative-array collection', () =>
  {
    expect(() => {
      const
      options = {
        'collection' : true
      },
      data    = [{
        array : {
          item : ['a', 'b', 'c']
        }
      }]

      validator.valid(options, data)

    }).to.not.throw()
  })


  it('Should throw error when a collection is being validated and it\'s not an array', () =>
  {
    expect(() => {
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
    expect(() => {
      const
      options = {},
      data    = true

      validator.valid(options, data)

    }).to.throw()
  })

  it('Should throw error when has a property that is not an array', () =>
  {
    expect(() => {
      const
      options = {
        'associative-array-type' : 'string'
      },
      data    = {
        array : {
          property : true
        }
      }

      validator.valid(options, data)
    }).to.throw()
  })
})