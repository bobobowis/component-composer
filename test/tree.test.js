describe('Tree', () =>
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
      factory = core.locate('data-structure/tree/factory')
      done()
    })
  })

  it('Can create a tree', () =>
  {
    expect(() =>
    {
      factory.create({
        'nodes' : {
          'items' : {
            'a' : {
              'id'   : 'a',
              'name' : 'a'
            },
            'b' : {
              'id'   : 'b',
              'name' : 'b'
            },
            'c' : {
              'id'   : 'c',
              'name' : 'c'
            }
          }
        },
        'edges' : {
          'items' : {
            'a' : [
              {
                'target'  : 'b',
                'payload' : {}
              },
              {
                'target'  : 'c',
                'payload' : {}
              }
            ]
          }
        },
        'isDirected' : true
      })
    }).to.not.throw()
  })

  it('Can set the tree root if node exists', () =>
  {
    const tree = factory.create({
      'nodes' : {
        'items' : {
          'a' : {
            'name' : 'a'
          },
          'b' : {
            'name' : 'b'
          },
          'c' : {
            'name' : 'c'
          }
        }
      },
      'edges' : {
        'items' : {
          'a' : [
            {
              'target'  : 'b',
              'payload' : {}
            },
            {
              'target'  : 'c',
              'payload' : {}
            }
          ]
        }
      },
      'isDirected' : true
    })

    tree.setRoot('a')

    expect(tree.root).to.deep.equal('a')
  })

  it('Should throw an error while setting the tree root if node does not exists', () =>
  {
    expect(() =>
    {
      const tree = factory.create({
        'nodes' : {
          'items' : {
            'a' : {
              'id'   : 'a',
              'name' : 'a'
            },
            'b' : {
              'id'   : 'b',
              'name' : 'b'
            },
            'c' : {
              'id'   : 'c',
              'name' : 'c'
            }
          }
        },
        'edges' : {
          'items' : {
            'a' : [
              {
                'source'  : 'a',
                'target'  : 'b',
                'payload' : {}
              },
              {
                'source'  : 'a',
                'target'  : 'c',
                'payload' : {}
              }
            ]
          }
        },
        'isDirected' : true
      })

      tree.setRoot('I don\'t exists')
    }).to.throw()
  })

  it('Can get tree leaves', () =>
  {
    const tree = factory.create({
      'nodes' : {
        'items' : {
          'a' : {
            'id'   : 'a',
            'name' : 'a'
          },
          'b' : {
            'id'   : 'b',
            'name' : 'b'
          },
          'c' : {
            'id'   : 'c',
            'name' : 'c'
          }
        }
      },
      'edges' : {
        'items' : {
          'a' : [
            {
              'target'  : 'b',
              'payload' : {}
            },
            {
              'target'  : 'c',
              'payload' : {}
            }
          ]
        }
      },
      'isDirected' : true
    }),
    leaves = tree.getLeaves()

    expect(leaves).to.deep.equal(['b', 'c'])
  })

  it('Can get a JSON tree flattened', () =>
  {
    const tree = factory.create({
      'nodes' : {
        'items' : {
          'a' : {
            'id'   : 'a',
            'name' : 'a'
          },
          'b' : {
            'id'   : 'b',
            'name' : 'b'
          },
          'c' : {
            'id'   : 'c',
            'name' : 'c'
          },
          'd' : {
            'id'   : 'd',
            'name' : 'd'
          }
        }
      },
      'edges' : {
        'items' : {
          'a' : [
            {
              'source'  : 'a',
              'target'  : 'b',
              'payload' : {}
            },
            {
              'source'  : 'a',
              'target'  : 'c',
              'payload' : {}
            }
          ],
          'c' : [
            {
              'source'  : 'c',
              'target'  : 'd',
              'payload' : {}
            }
          ]
        }
      },
      'isDirected' : true,
      'root'       : 'a'
    }),
    treeJSON = tree.getJSON(true)

    expect(treeJSON).to.deep.equal({
      'a' : {
        'id'   : 'a',
        'name' : 'a'
      },
      'a.b' : {
        'id'   : 'b',
        'name' : 'b'
      },
      'a.c' : {
        'id'   : 'c',
        'name' : 'c'
      },
      'a.c.d' : {
        'id'   : 'd',
        'name' : 'd'
      }
    })
  })

  it('Can get a JSON tree', () =>
  {
    const tree = factory.create({
      'nodes' : {
        'items' : {
          'a' : {
            'id'   : 'a',
            'name' : 'a'
          },
          'b' : {
            'id'   : 'b',
            'name' : 'b'
          },
          'c' : {
            'id'   : 'c',
            'name' : 'c'
          },
          'd' : {
            'id'   : 'd',
            'name' : 'd'
          }
        }
      },
      'edges' : {
        'items' : {
          'a' : [
            {
              'source'  : 'a',
              'target'  : 'b',
              'payload' : {}
            },
            {
              'source'  : 'a',
              'target'  : 'c',
              'payload' : {}
            }
          ],
          'c' : [
            {
              'source'  : 'c',
              'target'  : 'd',
              'payload' : {}
            }
          ]
        }
      },
      'isDirected' : true,
      'root'       : 'a'
    }),
    treeJSON = tree.getJSON()

    expect(treeJSON).to.deep.equal({
      'a' : {
        'id'   : 'a',
        'name' : 'a',
        'b'    :
        {
          'id'   : 'b',
          'name' : 'b'
        },
        'c' :
        {
          'id'   : 'c',
          'name' : 'c',
          'd'    : {
            'id'   : 'd',
            'name' : 'd'
          }
        }
      }
    })
  })
})
