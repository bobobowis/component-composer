
describe('Deepassign', () =>
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
  deepassign

  before((done) =>
  {
    requirejs(['superhero/core/factory'], (CoreFactory) =>
    {
      const coreFactory = new CoreFactory()

      core = coreFactory.create()

      core.load().then(() =>
      {
        deepassign = core.locate('core/deepassign')
      })
    })
  })

  it('Can replace value a property', () =>
  {
    const
    obj   = {
      'a' : 'a',
      'b' : {
        'a' : 'a',
        'b' : [1, 2, 3]
      },
      'c' : {
        'a' : 'a',
        'b' : [{ 'a': 'a' }]
      }
    },
    path  = 'b.a',
    value = 'A',
    modified = deepassign.assign(obj, path, value)

    expect(modified).to.deep.equal({
      'a' : 'a',
      'b' : {
        'a' : 'A',
        'b' : [1, 2, 3]
      },
      'c' : {
        'a' : 'a',
        'b' : [{ 'a': 'a' }]
      }
    })
  })

  it('Can replace an array element', () =>
  {
    const
    obj   = {
      'a' : 'a',
      'b' : {
        'a' : 'a',
        'b' : [1, 2, 3]
      },
      'c' : {
        'a' : 'a',
        'b' : [{ 'a': 'a' }]
      }
    },
    path  = 'b.b[0]',
    value = 0,
    modified = deepassign.assign(obj, path, value)

    expect(modified).to.deep.equal({
      'a' : 'a',
      'b' : {
        'a' : 'a',
        'b' : [0, 2, 3]
      },
      'c' : {
        'a' : 'a',
        'b' : [{ 'a': 'a' }]
      }
    })
  })

  it('Can replace a property from an array element', () =>
  {
    const
    obj   = {
      'a' : 'a',
      'b' : {
        'a' : 'a',
        'b' : [1, 2, 3]
      },
      'c' : {
        'a' : 'a',
        'b' : [{ 'a': 'a' }]
      }
    },
    path  = 'c.b[0].a',
    value = 'b',
    modified = deepassign.assign(obj, path, value)

    expect(modified).to.deep.equal({
      'a' : 'a',
      'b' : {
        'a' : 'a',
        'b' : [1, 2, 3]
      },
      'c' : {
        'a' : 'a',
        'b' : [{ 'a': 'b' }]
      }
    })
  })

  it('If property does not exists, it must be added', () =>
  {
    const
    obj   = {
      'a' : 'a',
      'b' : {
        'a' : 'a',
        'b' : [1, 2, 3]
      },
      'c' : {
        'a' : 'a',
        'b' : [{ 'a': 'a' }]
      }
    },
    path  = 'c.not-exists',
    value = 4,
    modified = deepassign.assign(obj, path, value)
    expect(modified).to.deep.equal({
      'a' : 'a',
      'b' : {
        'a' : 'a',
        'b' : [1, 2, 3]
      },
      'c' : {
        'a'          : 'a',
        'b'          : [{ 'a': 'a' }],
        'not-exists' : 4
      }
    })
  })

  it('When property is not an object, it should throw an error', () =>
  {
    expect(() =>
    {
      const
      obj   = {
        'a' : 'a',
        'b' : {
          'a' : 'a',
          'b' : [1, 2, 3]
        },
        'c' : {
          'a' : 'a',
          'b' : [{ 'a': 'a' }]
        }
      },
      path  = 'c.not-exists.this-neither',
      value = 4

      deepassign.assign(obj, path, value)
    }).to.throw(/Expected and object for assigning properties: c\.not-exists/)
  })

  it('When array element is not an object, it should throw an error', () =>
  {
    expect(() =>
    {
      const
      obj   = {
        'a' : 'a',
        'b' : {
          'a' : 'a',
          'b' : [1, 2, 3]
        },
        'c' : {
          'a' : 'a',
          'b' : [{ 'a': 'a' }]
        }
      },
      path  = 'b.b[0].property',
      value = 0

      deepassign.assign(obj, path, value)
    }).to.throw(/Expected and object for assigning properties: b.b\[0\]/)
  })
})
