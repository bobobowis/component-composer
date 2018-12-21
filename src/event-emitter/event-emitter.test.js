describe('EventEmitter tests', () =>
{
  const
  expect        = require('chai').expect,
  EventEmitter  = require('.')

  it('should create an empty EventEmmiter', () =>
  {
    const eventEmitter = new EventEmitter()

    expect(eventEmitter.events).to.deep.equal({})
  })

  it('should bind a listener to an event', () =>
  {
    const
    eventEmitter = new EventEmitter(),
    listener     = () => { console.log('LISTENER') }

    eventEmitter.on('event', listener)

    expect(eventEmitter.events['event']).to.deep.equal([listener])
  })

  it('should remove the listener of an event', () =>
  {
    const
    eventEmitter = new EventEmitter(),
    listener     = () => { console.log('LISTENER') }

    eventEmitter.on('event', listener)
    eventEmitter.removeListener('event', listener)

    expect(eventEmitter.events['event']).to.deep.equal([])
  })

  it('should not throw error when removing a listener of an empty event', () =>
  {
    const
    eventEmitter = new EventEmitter(),
    listener     = () => { console.log('LISTENER') }

    expect(() =>
    {
      eventEmitter.removeListener('event', listener)
    }).to.not.throw()
    expect(eventEmitter.events['event']).to.deep.equal(undefined)
  })

  it('should not throw error when removing a unregistered listener of an event', () =>
  {
    const
    eventEmitter = new EventEmitter(),
    listenerA    = () => { console.log('LISTENER A') },
    listenerB    = () => { console.log('LISTENER A') }

    eventEmitter.on('event', listenerA)
    expect(() =>
    {
      eventEmitter.removeListener('event', listenerB)
    }).to.not.throw()
  })

  it('should remove all the listeners of an event', () =>
  {
    const
    eventEmitter = new EventEmitter(),
    listenerA    = () => { console.log('LISTENER A') },
    listenerB    = () => { console.log('LISTENER B') }

    eventEmitter.on('event', listenerA)
    eventEmitter.on('event', listenerB)

    eventEmitter.removeAllListeners('event')

    expect(eventEmitter.events['event']).to.deep.equal([])
  })
  it('should reset the event emitter', () =>
  {
    const
    eventEmitter = new EventEmitter(),
    listenerA    = () => { console.log('LISTENER A') },
    listenerB    = () => { console.log('LISTENER B') }

    eventEmitter.on('event', listenerA)
    eventEmitter.on('event', listenerB)

    eventEmitter.resetEventEmitter()

    expect(eventEmitter.events).to.deep.equal({})
  })

  it('should emit and capture an event', () =>
  {
    let value = null

    const
    eventEmitter = new EventEmitter(),
    listener     = (arg) => { value = arg }

    eventEmitter.on('event', listener)
    eventEmitter.emit('event', 'changed')

    expect(value).to.deep.equal('changed')
  })

  it('should not emit an event if there is no listener registered', () =>
  {
    let value = null

    const
    eventEmitter = new EventEmitter()

    eventEmitter.emit('event', 'changed')

    expect(value).to.deep.equal(null)
  })

  it('should emit and capture an event once', () =>
  {
    let value = null

    const
    eventEmitter = new EventEmitter(),
    listener     = (arg) => { value = arg }

    eventEmitter.once('event', listener)
    eventEmitter.emit('event', 'changed')
    eventEmitter.emit('event', 'changedAgain')

    expect(value).to.deep.equal('changed')
    expect(eventEmitter.events['event']).to.deep.equal([])
  })
})
