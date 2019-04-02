class ChunkNode
{
  constructor(element)
  {
    this.element  = element
    this.children = []
  }

  addChild(element)
  {
    this.children.push(element)
  }

  findIndexBy(element, child)
  {
    return child.id === element.id
  }

  removeChild(element)
  {
    const index = this.children.findIndex(this.findIndexById.bind(this, element))
    if(index !== -1)
      this.children.splice(index, 1)
  }
}

module.exports = ChunkNode
