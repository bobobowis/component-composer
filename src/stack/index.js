class Stack
{
  constructor()
  {
    this.items = []
  }

  sta(element)
  {
    this.items.push(element)
  }

  pop()
  {
    if(!this.isEmpty())
      return this.items.pop()

    return null
  }


  peek()
  {
    return this.items[this.items.length - 1]
  }

  isEmpty()
  {
    return this.items.length === 0
  }
}

module.exports = Stack
