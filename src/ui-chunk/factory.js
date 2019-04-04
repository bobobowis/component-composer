const
UIChunk = require('.'),
uuidv4  = require('uuid/v4')

class UIChunkFactory
{
  constructor(propsFactory)
  {
    this.propsFactory = propsFactory
  }

  create({
    customId,
    name,
    type,
    template    = type,
    controller  = type,
    reducer     = type
  })
  {
    // TO DO VALIDATE
    const
    uuid      = uuidv4(),
    selector  = customId ? `#${customId}` : `#_${uuid}`,
    id        = customId ? customId : uuid,
    props     = this.propsFactory.create({ id })

    return new UIChunk({
      id,
      name,
      selector,
      template,
      controller,
      reducer,
      uuid,
      props,
      type
    })
  }
}

module.exports = UIChunkFactory
