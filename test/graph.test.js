describe('Graph', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('../src/core/factory')

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
      factory = core.locate('data-structure/graph/factory')
      done()
    })
  })

  it('Can create a graph', () =>
  {
    expect(() =>
    {
      const graph = factory.create({
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

      console.log(graph)
    }).to.not.throw()
  })

  it('Can add a node', () =>
  {
    const
    graph  = factory.create({
      'nodes' : {
        'items' : {
          'a' : {
            'id'   : 'a',
            'name' : 'a'
          }
        }
      },
      'edges' : {
        'items' : { }
      },
      'isDirected' : true
    }),
    node = {
      'id'   : 'b',
      'name' : 'b'
    }

    graph.addNode(node)

    expect(graph.totalNodes()).to.deep.equal(2)
  })

  it('Can add an edge in a directed graph', () =>
  {
    const
    graph  = factory.create({
      'nodes' : {
        'items' : {
          'a' : {
            'id'   : 'a',
            'name' : 'a'
          },
          'b' : {
            'id'   : 'b',
            'name' : 'b'
          }
        }
      },
      'edges' : {
        'items' : { }
      },
      'isDirected' : true
    })

    graph.addEdge({
      'source'  : 'b',
      'target'  : 'a',
      'payload' : {
        'weight' : 0.8
      }
    })

    expect(graph.edges.count()).to.deep.equal(1)
  })

  it('Can add an edge in a undirected graph', () =>
  {
    const
    graph  = factory.create({
      'nodes' : {
        'items' : {
          'a' : {
            'id'   : 'a',
            'name' : 'a'
          },
          'b' : {
            'id'   : 'b',
            'name' : 'b'
          }
        }
      },
      'edges' : {
        'items' : { }
      },
      'isDirected' : false
    })

    graph.addEdge({
      'source'  : 'b',
      'target'  : 'a',
      'payload' : {
        'weight' : 0.8
      }
    })

    expect(graph.edges.count()).to.deep.equal(2)
  })

  it('Adding an edge with a non existing source should throw an error', () =>
  {
    const
    graph  = factory.create({
      'nodes' : {
        'items' : {
          'a' : {
            'id'   : 'a',
            'name' : 'a'
          },
          'b' : {
            'id'   : 'b',
            'name' : 'b'
          }
        }
      },
      'edges' : {
        'items' : { }
      },
      'isDirected' : false
    })

    expect(() =>
    {
      graph.addEdge({
        'source'  : 'c',
        'target'  : 'a',
        'payload' : {
          'weight' : 0.8
        }
      })
    }).to.throw()
  })

  it('Adding an edge with a non existing target should throw an error', () =>
  {
    const
    graph  = factory.create({
      'nodes' : {
        'items' : {
          'a' : {
            'id'   : 'a',
            'name' : 'a'
          },
          'b' : {
            'id'   : 'b',
            'name' : 'b'
          }
        }
      },
      'edges' : {
        'items' : { }
      },
      'isDirected' : false
    })

    expect(() =>
    {
      graph.addEdge({
        'source'  : 'a',
        'target'  : 'c',
        'payload' : {
          'weight' : 0.8
        }
      })
    }).to.throw()
  })

  it('Can print a graph', () =>
  {
    expect(() =>
    {
      const graph = factory.create({
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

      graph.printGraph()
    }).to.not.throw()
  })

  it('Can get a BFS path for a graph if startNode exists', () =>
  {
    const graph = factory.create({
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
          'b' : [
            {
              'source'  : 'b',
              'target'  : 'a',
              'payload' : {}
            },
            {
              'source'  : 'b',
              'target'  : 'd',
              'payload' : {}
            }
          ]
        }
      },
      'isDirected' : true
    }),
    path = graph.bfs('a')

    expect(path).to.deep.equal(['a', 'b', 'c', 'd'])
  })

  it('Can serialize a graph', () =>
  {
    const graph = factory.create({
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
          'b' : [
            {
              'source'  : 'b',
              'target'  : 'a',
              'payload' : {}
            },
            {
              'source'  : 'b',
              'target'  : 'd',
              'payload' : {}
            }
          ]
        }
      },
      'isDirected' : false
    }),
    serialized = graph.serialize()

    expect(serialized).to.deep.equal({
      'nodes' : [
        {
          'id'   : 'a',
          'name' : 'a'
        },
        {
          'id'   : 'b',
          'name' : 'b'
        },
        {
          'id'   : 'c',
          'name' : 'c'
        },
        {
          'id'   : 'd',
          'name' : 'd'
        }
      ],
      'links' : [
        {
          'source'  : 'a',
          'target'  : 'b',
          'payload' : {}
        },
        {
          'source'  : 'a',
          'target'  : 'c',
          'payload' : {}
        },
        {
          'source'  : 'b',
          'target'  : 'a',
          'payload' : {}
        },
        {
          'source'  : 'b',
          'target'  : 'd',
          'payload' : {}
        }
      ]
    })
  })

  it('Can get a DFS path for a graph if startNode exists', () =>
  {
    const graph = factory.create({
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
          'b' : [
            {
              'source'  : 'b',
              'target'  : 'a',
              'payload' : {}
            },
            {
              'source'  : 'b',
              'target'  : 'd',
              'payload' : {}
            }
          ]
        }
      },
      'isDirected' : false
    }),
    path = graph.dfs('a')

    expect(path).to.deep.equal(['a', 'b', 'd', 'c'])
  })

  it('Should throw an error while getting a BFS path for a graph if startNode does not exists', () =>
  {
    expect(() =>
    {
      const graph = factory.create({
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
            'b' : [
              {
                'source'  : 'b',
                'target'  : 'd',
                'payload' : {}
              }
            ]
          }
        },
        'isDirected' : true
      })

      graph.bfs('I don\'t exists')
    }).to.throw()
  })

  it('Should throw an error while getting a DFS path for a graph if startNode does not exists', () =>
  {
    expect(() =>
    {
      const graph = factory.create({
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
            'b' : [
              {
                'source'  : 'b',
                'target'  : 'd',
                'payload' : {}
              }
            ]
          }
        },
        'isDirected' : true
      })

      graph.dfs('I don\'t exists')
    }).to.throw()
  })
})
