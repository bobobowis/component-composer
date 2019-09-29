describe('core/common/channel/factory', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require(`../../node/factory`)

  let
  core,
  factory

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core        = coreFactory.create([
      { name: 'core/common/bootstrap' },
      { name: 'core/common/observer' },
      { name: 'core/common/schema' },
      { name: 'core/common/object' },
      { name: 'core/common/string' },
      { name: 'core/common/data-structure' },
      { name: 'core/node/console' },
      { name: 'core/node/process' },
      { name: 'core/node/schema/bootstrap' },
      { name: 'core/node/eventbus' },
      { name: 'core/common/channel' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        factory = core.locate('core/channel/factory')
        done()
      })
    })
  })

  it('Can create a bus channel', () =>
  {
    expect(() =>
    {
      factory.create({
        id : 'my-channel'
      })
    }).to.not.throw()
  })

  it('Must return false if eventName has no observers', () =>
  {
    const
    busChannel    = factory.create({
      id : 'my-channel'
    }),
    hasObservers  = busChannel.hasObservers('EVENT_NAME')

    expect(hasObservers).to.be.equal(false)
  })

  it('Can subscribe to an event', () =>
  {
    const
    busChannel = factory.create({
      id : 'my-channel'
    }),
    event     = 'EVENT_NAME',
    observer  = (payload) =>
    {
      console.log(payload)
    }

    busChannel.on({
      event,
      observer
    })

    const hasObservers = busChannel.hasObservers('EVENT_NAME')

    expect(hasObservers).to.be.equal(true)
  })

  it('Can subscribe to all events', () =>
  {
    const
    busChannel  = factory.create({
      id : 'my-channel'
    }),
    observer    = (payload) =>
    {
      console.log(payload)
    }

    busChannel.onAll(observer)

    const hasObservers = busChannel.hasObservers('*')

    expect(hasObservers).to.be.equal(true)
  })

  it('Can remove a observer function', () =>
  {
    const
    busChannel  = factory.create({
      id : 'my-channel'
    }),
    event       = 'EVENT_NAME',
    observer    = (payload) =>
    {
      console.log(payload)
    }

    busChannel.on({
      event,
      observer
    })

    busChannel.removeListener({
      event,
      observer
    })

    const hasObservers = busChannel.hasObservers(event)

    expect(hasObservers).to.be.equal(false)
  })

  it('Unsubscribing a non existing observer should not throw an error', () =>
  {
    expect(() =>
    {
      const
      busChannel  = factory.create({
        id : 'my-channel'
      }),
      eventName   = 'EVENT_NAME',
      observer    = (payload) =>
      {
        console.log(payload)
      }

      busChannel.removeListener({
        eventName,
        observer
      })
    }).to.not.throw()
  })

  it('Can remove all observers', () =>
  {
    const
    busChannel  = factory.create({
      id : 'my-channel'
    }),
    event       = 'EVENT_NAME',
    observer    = (payload) =>
    {
      console.log(payload)
    }

    busChannel.on({
      event,
      observer
    })
    busChannel.on({
      event,
      observer
    })

    busChannel.removeAllListeners(event)

    const hasObservers = busChannel.hasObservers(event)

    expect(hasObservers).to.be.equal(false)
  })

  it('Can reset all event observers', () =>
  {
    const
    busChannel  = factory.create({
      id : 'my-channel'
    }),
    event       = 'EVENT_NAME',
    observer    = (payload) =>
    {
      console.log(payload)
    }

    busChannel.on({
      event,
      observer
    })

    busChannel.reset()

    expect(busChannel.observers.items).to.deep.equal({})
  })

  it('Can get an eventName observers', () =>
  {
    const
    busChannel  = factory.create({
      id : 'my-channel'
    }),
    event       = 'EVENT_NAME',
    observer    = (payload) =>
    {
      console.log(payload)
    }

    busChannel.on({
      event,
      observer
    })

    busChannel.on({
      event,
      observer
    })

    const observers = busChannel.observers.get(event)

    expect(observers).to.deep.equal([observer, observer])
  })

  it('Can create an event', () =>
  {
    const
    busChannel  = factory.create({
      id : 'my-channel'
    }),
    data        = {
      foo : 'bar'
    },
    event       = busChannel.createEvent({
      name : 'EVENT',
      data
    })

    expect(event.meta.name).to.deep.equal('EVENT')
    expect(event.meta.emitter).to.deep.equal('my-channel')
    expect(event.data).to.deep.equal(data)
  })

  it('Can subscribe once to an event', async () =>
  {
    const
    busChannel  = factory.create({
      id : 'my-channel'
    }),
    eventName         = 'EVENT_NAME',
    observer        = (payload) =>
    {
      return payload
    }

    busChannel.once({
      eventName,
      observer
    })

    await busChannel.emit({
      name    : eventName,
      payload : { }
    })


    const hasObservers = busChannel.hasObservers(eventName)

    expect(hasObservers).to.be.equal(false)
  })

  it('Can publish an event (only eventName observers)', async () =>
  {
    let counter = 0

    const
    busChannel        = factory.create({
      id : 'my-channel'
    }),
    event           = 'EVENT_NAME',
    observer        = (emittedEvent) =>
    {
      const payload = emittedEvent.data
      counter += payload.increment
    }

    busChannel.on({
      event,
      observer
    })

    await busChannel.emit({
      name : event,
      data : {
        increment : 1
      }
    })

    expect(counter).to.be.equal(1)
  })

  it('Can publish an event (only global observers)', async () =>
  {
    let counter = 0

    const
    busChannel        = factory.create({
      id : 'my-channel'
    }),
    eventName         = 'EVENT_NAME',
    observer        = (emittedEvent) =>
    {
      const payload = emittedEvent.data
      counter += payload.increment
    }

    busChannel.onAll(observer)

    await busChannel.emit({
      name : eventName,
      data : {
        increment : 1
      }
    })

    expect(counter).to.be.equal(1)
  })
})
