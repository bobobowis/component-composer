class Dispatcher
{
  constructor({
    busChannel
  })
  {
    this.busChannel = busChannel

    this.busChannel.subscribeAll(this.dispatchAction.bind(this))
  }

  dispatchAction(action)
  {
    this.busChannel.publish({
      id      : 'ACTION_DISPATCHED',
      payload : action
    })
  }
}

module.exports = Dispatcher
