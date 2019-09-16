
describe('Collection Validator', () =>
{
  const
  expect    = require('chai').expect,
  path      = require('path'),
  requirejs = require('requirejs')

  requirejs.config({
    'baseUrl' : path.resolve(__dirname,  '../src/lib'),
    'paths'   :
    {
      'core' : path.resolve(__dirname,  '../src/lib/superhero/core')
    }
  })

  let
  core,
  validator

  before((done) =>
  {
    requirejs(['superhero/core/factory'], (CoreFactory) =>
    {
      const coreFactory = new CoreFactory()

      core = coreFactory.create()

      core.add('core/data-structure')

      core.load().then(() =>
      {
        core.locate('core/bootstrap').bootstrap().then(() =>
        {
          validator = core.locate('core/schema/validator/collection')
          done()
        })
      })
    })
  })

  it('Can valid a single collection', () =>
  {
    expect(() =>
    {
      const
      options = {},
      data    = ['a', 'b', 'c']

      validator.valid(options, data)
    }).to.not.throw()
  })

  it('Can valid an array collection', () =>
  {
    expect(() =>
    {
      const
      options = {
        collection : true
      },
      data    = [['a', 'b', 'c']]

      validator.valid(options, data)
    }).to.not.throw()
  })

  it('Can valid a collection of an specified type (with options)', () =>
  {
    expect(() =>
    {
      const
      options = {
        'collection-type'    : 'string',
        'collection-options' : {
          'enum' : ['a', 'b', 'c']
        }
      },
      data    = ['a', 'b', 'c']

      validator.valid(options, data)
    }).to.not.throw()
  })

  it('Can valid an collection of an specified type (without options)', () =>
  {
    expect(() =>
    {
      const
      options = {
        'collection-type' : 'string'
      },
      data    = ['a', 'b', 'c']

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

  it('Should throw error when is not a collection', () =>
  {
    expect(() =>
    {
      const
      options = {},
      data    = true

      validator.valid(options, data)
    }).to.throw()
  })
})
