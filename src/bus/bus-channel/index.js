/**
 * BusChannel class
 * @class
 */
class BusChannel
{
  /**
   * Creates a basic BusChannel
   */
  constructor(actionFactory)
  {
    this.actionFactory      = actionFactory
    this.actionSubscribers  = {}
  }

  /**
   * Adds a subscriber to an action
   * @param {string} actionId - Id of the action
   * @param {function} subscriber - Subscriber function
   * @returns {function} - Returns its unsubscribe function
   */
  subscribe(actionId, subscriber)
  {
    if(!this.hasSubscribers(actionId))
      this.actionSubscribers[actionId] = []

    this.actionSubscribers[actionId].push(subscriber)
    return () => this.unsubscribe(actionId, subscriber)
  }

  subscribeAll(subscriber)
  {
    return this.subscribe('ALL_ACTIONS', subscriber)
  }

  /**
   * Removes the subscriber function for the specified action id.
   * @param {string} actionId - Id of the action
   * @param {function} subscriber - Subscriber function
   */
  unsubscribe(actionId, subscriber)
  {
    const index = this.getSubscriberIndex(actionId, subscriber)
    if(index > -1)
      this.actionSubscribers[actionId].splice(index, 1)
  }

  hasSubscribers(actionId)
  {
    return Array.isArray(this.actionSubscribers[actionId])
  }

  getSubscriberIndex(actionId, subscriber)
  {
    const hasSubscribers = this.hasSubscribers(actionId)

    if(hasSubscribers)
      return this.actionSubscribers[actionId].indexOf(subscriber)

    return -1
  }

  /**
   * Removes all subscribers functions for the specified action id.
   * @param {string} actionId - Id of the action
   */
  unsubscribeAll(actionId)
  {
    this.actionSubscribers[actionId] = []
  }

  /**
   * Resets the BusChannel
   */
  reset()
  {
    this.actionSubscribers = {}
  }

  /**
   * Returns the subscribers for the given action id
   * @param {string} actionId  - Id of the action
   */
  getSubscribers(actionId)
  {
    const subscribers = this.actionSubscribers[actionId]

    return subscribers
  }

  createAction(id, source, type, payload)
  {
    const action = this.actionFactory.create({
      id,
      source,
      type,
      payload
    })

    return action
  }

  /**
   * Emits an action
   */
  publish(id, source, type, payload)
  {
    const action = this.createAction(id, source, type, payload)

    this.executeSubscribers('ALL_ACTIONS', action)
    this.executeSubscribers(action.id, action)
  }

  /**
   * Executes the subscribers of the specified action
   * @param {function} subscriber - Subscriber
   * @param {Action} action - Actions
   */
  executeSubscribers(actionId, action)
  {
    const subscribers = this.getSubscribers(actionId)

    if(subscribers)
      subscribers.forEach(this.executeSubscriber.bind(this, action))
  }

  /**
   * Executes the subscriber with the action
   * @param {function} subscriber - Subscriber
   * @param {Action} action - Actions
   */
  executeSubscriber(action, subscriber)
  {
    subscriber.call(this, action)
  }

  /**
   * Adds a listener to an action that only executes once
   * @param {Actions} action - Actions
   * @param {function} subscriber - Listener function
   */
  subscribeOnce(actionId, subscriber)
  {
    const remove = this.subscribe(actionId, (...args) =>
    {
      remove()
      subscriber.apply(this, args)
    })
  }
}

module.exports = BusChannel
