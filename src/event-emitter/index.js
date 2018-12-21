/**
 * EventEmitter class
 * @class
 */
class EventEmitter
{
  /**
   * Creates a basic EventEmitter
   */
  constructor()
  {
    this.events = {}
  }
  /**
   * Adds a listener to an event
   * @param {string} event - Name of the event
   * @param {function} listener - Listener function
   * @returns {function} - Returns its removeListener function
   */
  on(event, listener)
  {
    if(!Array.isArray(this.events[event]))
      this.events[event] = []

    this.events[event].push(listener)
    return () => this.removeListener(event, listener)
  }
  /**
   * Removes the listener function for the specified event.
   * @param {string} event - Name of the event
   * @param {function} listener - Listener function
   */
  removeListener(event, listener)
  {
    if(Array.isArray(this.events[event]))
    {
      const idx = this.events[event].indexOf(listener)
      if(idx > -1)
        this.events[event].splice(idx, 1)
    }
  }
  /**
   * Removes all listener functions for the specified event.
   * @param {string} event - Name of the event
   */
  removeAllListeners(event)
  {
    this.events[event] = []
  }
  /**
   * Resets the EventEmitter
   */
  resetEventEmitter()
  {
    this.events = {}
  }
  /**
   * Emits a event
   * @param {string} event - Name of the event
   * @param {...any} args - Listener args
   */
  emit(event, ...args)
  {
    if(Array.isArray(this.events[event]))
      this.events[event].forEach(listener => listener.apply(this, args))
  }
  /**
   * Adds a listener to an event that only executes once
   * @param {string} event - Name of the event
   * @param {function} listener - Listener function
   */
  once(event, listener)
  {
    const remove = this.on(event, (...args) =>
    {
      remove()
      listener.apply(this, args)
    })
  }
}

module.exports = EventEmitter
