const UIChunkNode = require('.')

class UIChunkNodeFactory
{
  create({
    element,
    children
  })
  {
    // TODO Validator
    return new UIChunkNode({
      element,
      children
    })
  }
}

module.exports = UIChunkNodeFactory
