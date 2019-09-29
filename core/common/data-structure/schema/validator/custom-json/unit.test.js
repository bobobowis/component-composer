
describe('core/schema/validator/custom-json', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('../../../../../node/factory')

  let
  core,
  validator

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core = coreFactory.create([
      { name: 'core/common/bootstrap' },
      { name: 'core/common/schema' },
      { name: 'core/common/data-structure' },
      { name: 'core/node/schema/bootstrap' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        validator = core.locate('core/schema/validator/custom-json')
        done()
      })
    })
  })

  it('Can valid a custom json', () =>
  {
    expect(() =>
    {
      const
      options = {},
      data    = {
        'key1' : 1,
        'key2' : 2
      }

      validator.valid(options, data)
    }).to.not.throw()
  })

  it('Can valid a custom json collection', () =>
  {
    expect(() =>
    {
      const
      options = {
        'collection' : true
      },
      data    = [{
        'key1' : 1,
        'key2' : 2
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

  it('Should throw error when has a property that is not the specified type', () =>
  {
    expect(() =>
    {
      const
      options = {
        'custom-json' :
        {
          'type' : 'string'
        }
      },
      data    = {
        'key1' : 1,
        'key2' : 2
      }

      validator.valid(options, data)
    }).to.throw()
  })

  it('Can valid an associative array of an specified type (without options)', () =>
  {
    expect(() =>
    {
      const
      options = {
        'custom-json' :
        {
          'type' : 'string'
        }
      },
      data    = {
        'key1' : '1',
        'key2' : '2'
      }

      validator.valid(options, data)
    }).to.not.throw()
  })

  it('Can valid an associative array of an specified type (with options)', () =>
  {
    expect(() =>
    {
      const
      options = {
        'custom-json' :
        {
          'type'    : 'string',
          'options' : {
            'enum' : ['1', '2']
          }
        }
      },
      data    = {
        'key1' : '1',
        'key2' : '2'
      }

      validator.valid(options, data)
    }).to.not.throw()
  })
})
