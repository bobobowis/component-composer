const
UIChunk = require('.'),
uuid    = require('uuid/v4')

class UIChunkFactory
{
  create({
    id,
    type,
    props,
    template,
    controllers,
    reducers
  })
  {
    const chunkId =  id ? id : `_${uuid()}`

    return new UIChunk(
      chunkId,
      type,
      props,
      template,
      controllers,
      reducers
    )
  }
}

module.exports = UIChunkFactory
