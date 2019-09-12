/* eslint-disable no-undef */
define(function()
{
  class Bus
  {
    constructor({
      channelFactory,
      channels
    })
    {
      this.channelFactory  = channelFactory
      this.channels        = channels
    }

    addChannel(id)
    {
      this.channels.add({
        id,
        element : this.channelFactory.create(id)
      })
    }

    deleteChannel(id)
    {
      this.channels.remove(id)
    }

    getChannel(id)
    {
      return this.channels.get(id)
    }

    async emit({
      channelId,
      name,
      data
    })
    {
      return new Promise((resolve, reject) =>
      {
        this.getChannel(channelId)
          .emit({
            name,
            data
          })
          .then(() =>
          {
            resolve()
          })
          .catch((error) =>
          {
            reject(error)
          })
      })
    }

    on({
      channelId,
      event,
      observer
    })
    {
      return this.getChannel(channelId)
        .on({
          event,
          observer
        })
    }

    once({
      channelId,
      event,
      observer
    })
    {
      this.getChannel(channelId)
        .once({
          event,
          observer
        })
    }

    onAllEvents({
      channelId,
      observer
    })
    {
      this.getChannel(channelId)
        .onAllEvents(observer)
    }

    removeListener({
      channelId,
      event,
      observer
    })
    {
      this.getChannel(channelId)
        .removeListener({
          event,
          observer
        })
    }

    removeAllListeners({
      channelId,
      event
    })
    {
      this.getChannel(channelId).removeAllListeners(event)
    }

    reset(channelId)
    {
      this.getChannel(channelId).reset()
    }

    get [Symbol.toStringTag]()
    {
      return 'Bus'
    }
  }

  return Bus
})
