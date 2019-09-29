describe('Bus', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('../core/node/factory'),
  components  = require('./components')

  let
  core,
  bus

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core        = coreFactory.create([
      ...components,
      { name: 'core/common/channel' },
      { name: 'core/common/bus' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        bus = core.locate('core/bus')
        done()
      })
    })
  })


  it('Can add a channel', () =>
  {
    const channelId  = 'my-custom-channel'

    bus.addChannel(channelId)

    const channel = bus.getChannel(channelId)

    expect(channel).to.not.be.equal(undefined)
  })

  it('Can remove a channel', () =>
  {
    const channelId   = 'my-custom-channel'

    bus.addChannel(channelId)

    bus.deleteChannel(channelId)

    const channel = bus.getChannel(channelId)

    expect(channel).to.be.equal(undefined)
  })


  it('Can emit into a channel', async () =>
  {
    const channelId   = 'my-custom-channel'

    bus.addChannel(channelId)

    let counter = 0

    const
    event     = 'EVENT_NAME',
    observer  = (eventEmmited) =>
    {
      const payload = eventEmmited.data
      counter += payload.increment
    }

    bus.on({ channelId, event, observer })

    await bus.emit({
      channelId : channelId,
      name      : event,
      data      : {
        increment : 1
      }
    })

    expect(counter).to.be.equal(1)
  })

  it('Can on once into a channel', async () =>
  {
    const channelId   = 'my-custom-channel'

    bus.addChannel(channelId)

    const
    event     = 'EVENT_NAME',
    observer  = () => {}

    bus.once({ channelId, event, observer })

    await bus.emit({
      channelId : channelId,
      name      : event,
      data      : {
        increment : 1
      }
    })

    const hasObservers = bus.getChannel(channelId).hasObservers(event)

    expect(hasObservers).to.be.equal(false)
  })

  it('Can on to all action from a channel', () =>
  {
    const channelId   = 'my-custom-channel'

    bus.addChannel(channelId)

    const observer = () => {}

    bus.onAll({ channelId, observer })

    const hasObservers = bus.getChannel(channelId).hasObservers('*')

    expect(hasObservers).to.be.equal(true)
  })

  it('Can remove all observers from an event in a specific channel', () =>
  {
    const channelId   = 'my-custom-channel'

    bus.addChannel(channelId)

    const
    eventName = 'EVENT_NAME',
    observer  = () => {}

    bus.on({ eventName, channelId, observer })

    bus.removeAllListeners({
      channelId,
      eventName
    })

    const hasObservers = bus.getChannel(channelId).hasObservers(eventName)

    expect(hasObservers).to.be.equal(false)
  })

  it('Can remove an observer from an event in a specific channel', () =>
  {
    const channelId   = 'my-custom-channel'

    bus.addChannel(channelId)

    const
    eventName   = 'EVENT_NAME',
    observer  = () => {}

    bus.on({ eventName, channelId, observer })
    bus.removeListener({
      channelId,
      observer,
      eventName
    })

    const hasObservers = bus.getChannel(channelId).hasObservers(eventName)

    expect(hasObservers).to.be.equal(false)
  })

  it('Can reset a channel', () =>
  {
    const channelId   = 'my-custom-channel'

    bus.addChannel(channelId)

    const
    eventName = 'EVENT_NAME',
    observer  = () => {}

    bus.on({ eventName, channelId, observer })
    bus.reset(channelId)

    const channel = bus.getChannel(channelId)

    expect(channel.observers.items).to.deep.equal({ })
  })
})
