class Queue
{
  constructor()
  {
    this.items = []
  }

  enqueue(element)
  {
    this.items.push(element)
  }

  dequeue()
  {
    if(!this.isEmpty())
      return this.items.shift()
    else
      return null
  }


  front()
  {
    if(!this.isEmpty())
      return this.items[0]
    else
      return null
  }

  isEmpty()
  {
    return this.items.length === 0
  }
}

module.exports = Queue
