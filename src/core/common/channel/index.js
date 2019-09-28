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
    observers,
    composer,
    console
  })
  {
    this.observers          = observers
    this.composer           = composer
    this.warnings           = []
    this.console            = console
    this[Symbol.for('id')]  = id
  }

  /**
   * Adds a observer to an event
   * @param {string} event - Event name
   * @param {function} observer - Observer function
   * @returns {function} - Returns its remove function
   */
  on({
    event,
    observer
  })
  {
    this.observers.add({
      id      : event,
      element : observer
    })

    return () =>
    {
      this.removeListener({
        event,
        observer
      })
    }
  }

  /**
   * Adds a observer to all events
   * @param {function} observer - Observer function
   * @returns {function} - Returns its remove function
   */
  onAll(observer)
  {
    return this.on({
      event : '*',
      observer
    })
  }

  /**
   * Removes the observer function for the specified event name
   * @param {string} event - Event name
   * @param {function} observer - Oserver function
   */
  removeListener({
    event,
    observer
  })
  {
    this.observers.removeElement({
      id      : event,
      element : observer
    })
  }

  /**
   * Removes all observers functions for the specified event name.
   * @param {string} event - Event name
   */
  removeAllListeners(event)
  {
    this.observers.remove(event)
  }

  /**
   * Checks if an event has observers
   * @param {string} event - Event name
   * @returns {boolean} - Flag indicating if the event has observers
   */
  hasobservers(event)
  {
    return this.observers.hasElements(event)
  }

  /**
   * Creates an event
   * @param {string} event - Event name
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
    meta      = this.composer.compose('core/channel/event-meta', {
      name,
      timestamp,
      emitter
    }),
    event     = this.composer.compose('core/channel/event', {
      meta,
      data
    })

    return event
  }

  /**
   * Publish an event
   * @param {string} event - Event name
   * @returns {boolean} - Flag indicating if the event has observers
   */
  async emit({
    name,
    data
  })
  {
    const
    event             = this.createEvent({ name, data }),
    globalobservers   = this.observers.get('*') || [],
    eventObservers    = this.observers.get(name) || [],
    observers         = globalobservers.concat(eventObservers)

    if(eventObservers.length === 0 && !this.warnings.includes(name))
    {
      this.warnings.push(event)
      this.console.warning(`event: "${name}" does not have a defined observer`)
    }

    return new Promise((resolve, reject) =>
    {
      this.executeObservers(observers, event)
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

  listenerCount(event)
  {
    const observers = this.observers.get(event.meta.name) || []
    return observers.length
  }

  /**
   * Executes the observers of the specified event
   * @param {function} observer - observer
   * @param {Event} event - Event
   */
  async executeObservers(observers, event)
  {
    return new Promise((resolve, reject) =>
    {
      Promise.all(observers.map(this.executeObserver.bind(this, event)))
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
   * Executes the observer with the event
   * @param {function} observer - observer
   * @param {Event} event - Event
   */
  async executeObserver(event, observer)
  {
    return observer.call(this, event)
  }

  /**
   * Adds a listener to an event that only executes once
   * @param {string} event - Event name
   * @param {function} observer - Listener function
   */
  once({
    event,
    observer
  })
  {
    const remove = this.observers.on({
      event,
      observer : (...args) =>
      {
        remove()
        observer(this, args)
      }
    })
  }

  get [Symbol.toStringTag]()
  {
    return 'BusChannel'
  }
}

module.exports = BusChannel
