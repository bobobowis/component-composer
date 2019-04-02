const
UIChunk = require('.'),
uuidv4  = require('uuid/v4')

class UIChunkFactory
{
  create({
    customId,
    type,
    props,
    template    = type,
    controller  = type,
    reducer     = type
  })
  {
    const
    uuid      = uuidv4(),
    selector  = customId ? `#${customId}` : `#_${uuid}`,
    id        = customId ? customId : uuid

    return new UIChunk({
      id,
      selector,
      template,
      controller,
      reducer,
      uuid,
      type,
      props
    })
  }
}

module.exports = UIChunkFactory
