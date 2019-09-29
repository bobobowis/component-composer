describe('data-structure/queue', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('../../../node/factory')

  let
  core,
  factory

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
        factory = core.locate('data-structure/queue/factory')
        done()
      })
    })
  })

  it('Can create a queue', () =>
  {
    expect(() =>
    {
      factory.create()
    }).to.not.throw()
  })

  it('Can get toStringTag of a queue', () =>
  {
    const
    queue = factory.create(),
    tag   = Object.prototype.toString.call(queue)

    expect(tag).to.deep.equal('[object Queue]')
  })

  it('Can add an element to queue', () =>
  {
    const queue = factory.create()

    queue.enqueue(1)

    expect(queue.items).to.deep.equal([1])
  })

  it('Can reset the queue', () =>
  {
    const queue = factory.create()

    queue.enqueue(1)

    queue.reset()

    expect(queue.items).to.deep.equal([])
  })

  it('Can check if queue is empty', () =>
  {
    const queue = factory.create()

    let isEmpty = queue.isEmpty()

    expect(isEmpty).to.be.equal(true)

    queue.enqueue(1)

    isEmpty = queue.isEmpty()

    expect(isEmpty).to.be.equal(false)
  })

  it('Can dequeue an element', () =>
  {
    const queue = factory.create()

    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)

    expect(queue.items.length).to.be.equal(3)

    const element = queue.dequeue()

    expect(element).to.be.equal(1)
    expect(queue.items.length).to.be.equal(2)
  })

  it('If queue is empty, dequeue returns undefined', () =>
  {
    const
    queue   = factory.create(),
    element = queue.dequeue()

    expect(queue.items.length).to.be.equal(0)
    expect(element).to.be.equal(undefined)
  })

  it('Can get the front element without modifiying the queue', () =>
  {
    const queue = factory.create()

    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)

    const element = queue.front()

    expect(queue.items.length).to.be.equal(3)
    expect(element).to.be.equal(1)
    expect(queue.items.length).to.be.equal(3)
  })

  it('If queue is empty, front() returns undefined', () =>
  {
    const
    queue   = factory.create(),
    element = queue.front()

    expect(queue.items.length).to.be.equal(0)
    expect(element).to.be.equal(undefined)
  })
})
