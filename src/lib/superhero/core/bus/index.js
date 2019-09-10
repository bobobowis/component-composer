/* eslint-disable no-undef */
define(function()
{
  class Bus
  {
    constructor({
      busChannelFactory,
      channels
    })
    {
      this.busChannelFactory  = busChannelFactory
      this.channels           = channels
    }

    addChannel(id)
    {
      this.channels.add({
        id,
        element : this.busChannelFactory.create(id)
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

    async publish({
      channelId,
      eventName,
      data
    })
    {
      return new Promise((resolve, reject) =>
      {
        this.getChannel(channelId)
          .publish({
            name : eventName,
            emitter,
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

    subscribe({
      channelId,
      eventName,
      subscriber
    })
    {
      return this.getChannel(channelId)
        .subscribe({
          eventName,
          subscriber
        })
    }

    subscribeOnce({
      channelId,
      eventName,
      subscriber
    })
    {
      this.getChannel(channelId)
        .subscribeOnce({
          eventName,
          subscriber
        })
    }

    subscribeAll({
      channelId,
      subscriber
    })
    {
      this.getChannel(channelId)
        .subscribeAll(subscriber)
    }

    unsubscribe({
      channelId,
      eventName,
      subscriber
    })
    {
      this.getChannel(channelId)
        .unsubscribe({
          eventName,
          subscriber
        })
    }

    unsubscribeAll({
      channelId,
      eventName
    })
    {
      this.getChannel(channelId).unsubscribeAll(eventName)
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
