/* eslint-disable no-undef */
define(function()
{
  /**
   * BusChannel class
   * @class
   */
  class BusChannel
  {
    /**
     * Creates a basic BusChannel
     */
    constructor({
      id,
      eventSubscribers,
      composer
    })
    {
      this.eventSubscribers      = eventSubscribers
      this.composer              = composer
      this[Symbol.for('id')]     = id
    }

    /**
     * Adds a subscriber to an event
     * @param {string} eventName - Event name
     * @param {function} subscriber - Subscriber function
     * @returns {function} - Returns its unsubscribe function
     */
    subscribe({
      eventName,
      subscriber
    })
    {
      this.eventSubscribers.add({
        id      : eventName,
        element : subscriber
      })

      return () =>
      {
        this.unsubscribe({
          eventName,
          subscriber
        })
      }
    }

    /**
     * Adds a subscriber to all events
     * @param {function} subscriber - Subscriber function
     * @returns {function} - Returns its unsubscribe function
     */
    subscribeAll(subscriber)
    {
      return this.subscribe({
        eventName : '*',
        subscriber
      })
    }

    /**
     * Removes the subscriber function for the specified event name
     * @param {string} eventName - Event name
     * @param {function} subscriber - Subscriber function
     */
    unsubscribe({
      eventName,
      subscriber
    })
    {
      this.eventSubscribers.removeElement({
        id      : eventName,
        element : subscriber
      })
    }

    /**
     * Removes all subscribers functions for the specified event name.
     * @param {string} eventName - Event name
     */
    unsubscribeAll(eventName)
    {
      this.eventSubscribers.remove(eventName)
    }

    /**
     * Creates an event
     * @param {string} name - Action id
     * @param {Object} data - Event payload
     * @returns {Event} event
     */
    createEvent({
      name,
      data
    })
    {
      const
      timestamp = new Date().toISOString(),
      emitter   = this[Symbol.for('id')],
      meta      = this.composer.compose('event-meta', {
        name,
        timestamp,
        emitter
      }),
      event     = this.composer.compose('event', {
        meta,
        data
      })

      return event
    }

    /**
     * Checks if an event has subscribers
     * @param {string} eventId - Event name
     * @returns {boolean} - Flag indicating if the event has subscribers
     */
    hasSubscribers(eventId)
    {
      return this.eventSubscribers.hasElements(eventId)
    }

    /**
     * Publish an event
     * @param {string} eventName - Event name
     * @returns {boolean} - Flag indicating if the event has subscribers
     */
    async publish({
      name,
      data
    })
    {
      const
      event             = this.createEvent({ name, data }),
      globalSubscribers = this.eventSubscribers.get('*') || [],
      eventSubscribers  = this.eventSubscribers.get(event.meta.name) || [],
      subscribers       = globalSubscribers.concat(eventSubscribers)

      return new Promise((resolve, reject) =>
      {
        this.executeSubscribers(subscribers, event)
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

    /**
     * Executes the subscribers of the specified event
     * @param {function} subscriber - Subscriber
     * @param {Event} event - Event
     */
    async executeSubscribers(subscribers, event)
    {
      return new Promise((resolve, reject) =>
      {
        Promise.all(subscribers.map(this.executeSubscriber.bind(this, event)))
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

    /**
     * Executes the subscriber with the event
     * @param {function} subscriber - Subscriber
     * @param {Event} event - Event
     */
    async executeSubscriber(event, subscriber)
    {
      return subscriber.call(this, event)
    }

    /**
     * Adds a listener to an event that only executes once
     * @param {string} eventName - Event name
     * @param {function} subscriber - Listener function
     */
    subscribeOnce({
      eventName,
      subscriber
    })
    {
      const remove = this.eventSubscribers.subscribe({
        eventName,
        subscriber : (...args) =>
        {
          remove()
          subscriber.apply(this, args)
        }
      })
    }

    get [Symbol.toStringTag]()
    {
      return 'BusChannel'
    }
  }

  return BusChannel
})
